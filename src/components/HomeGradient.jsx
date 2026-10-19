"use client";

import { useEffect, useRef } from "react";

import { Gradient } from "./Gradient";

const toRgb = (hex) => [
  Number.parseInt(hex.slice(1, 3), 16) / 255,
  Number.parseInt(hex.slice(3, 5), 16) / 255,
  Number.parseInt(hex.slice(5, 7), 16) / 255,
];

const scenes = {
  hero: {
    colors: ["#c3e4ff", "#6ec3f4", "#eae2ff", "#b9beff"].map(toRgb),
    motion: { speed: 1, amplitude: 1, disturbance: 1 },
  },
  projects: {
    colors: ["#2e3440", "#323845", "#384253", "#3b485b"].map(toRgb),
    motion: { speed: 0.18, amplitude: 0.22, disturbance: 0.4 },
  },
  about: {
    colors: ["#2e3440", "#333946", "#3a4352", "#443e4b"].map(toRgb),
    motion: { speed: 0.05, amplitude: 0.08, disturbance: 0.2 },
  },
  career: {
    colors: ["#2e3440", "#303642", "#343d49", "#354746"].map(toRgb),
    motion: { speed: 0.012, amplitude: 0.025, disturbance: 0.08 },
  },
  contact: {
    colors: ["#2e3440", "#313743", "#374351", "#3a4d52"].map(toRgb),
    motion: { speed: 0.008, amplitude: 0.018, disturbance: 0.06 },
  },
};

const mix = (from, to, progress) => from + (to - from) * progress;

const mixPalettes = (from, to, progress) =>
  from.map((color, colorIndex) =>
    color.map((channel, channelIndex) =>
      mix(channel, to[colorIndex][channelIndex], progress),
    ),
  );

const mixMotion = (from, to, progress) => ({
  speed: mix(from.speed, to.speed, progress),
  amplitude: mix(from.amplitude, to.amplitude, progress),
  disturbance: mix(from.disturbance, to.disturbance, progress),
});

const smoothstep = (progress) => progress * progress * (3 - 2 * progress);

const HomeGradient = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const gradient = new Gradient({
      maxWidth: 1280,
      maxFrameRate: 60,
      density: [0.03, 0.06],
    });
    gradient.initGradient("#gradient-canvas");

    const sections = Array.from(
      document.querySelectorAll("[data-gradient-palette]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mobileCanvasQuery = window.matchMedia(
      "(max-width: 767px), (hover: none), (pointer: coarse)",
    );
    if (reducedMotion) gradient.pause();

    let mobileCanvas = mobileCanvasQuery.matches;
    let stops = [];
    let animationFrame;
    let sceneDirty = true;
    let canvasVisible = true;
    let scrollImpulse = 0;
    let lastScrollY = window.scrollY;
    let lastFrameTime = performance.now();

    const measureSections = () => {
      stops = sections
        .map((section) => {
          const top = section.getBoundingClientRect().top + window.scrollY;

          return {
            top,
            scene: scenes[section.dataset.gradientPalette],
          };
        })
        .filter((stop) => stop.scene);
    };

    const getCurrentScene = () => {
      for (let index = 0; index < stops.length - 1; index += 1) {
        const current = stops[index];
        const next = stops[index + 1];
        // Blend only while the incoming section enters the reading area,
        // then hold its palette instead of blending throughout the section.
        const start = next.top - window.innerHeight * 0.8;
        const end = next.top - window.innerHeight * 0.45;

        if (window.scrollY <= start) return current.scene;
        if (window.scrollY >= end) continue;

        const progress = smoothstep(
          (window.scrollY - start) / (end - start),
        );

        return {
          colors: mixPalettes(
            current.scene.colors,
            next.scene.colors,
            progress,
          ),
          motion: mixMotion(current.scene.motion, next.scene.motion, progress),
        };
      }

      return stops.at(-1).scene;
    };

    const updateScene = (timestamp = performance.now()) => {
      animationFrame = undefined;
      if (!stops.length || (!sceneDirty && scrollImpulse === 0)) return;
      sceneDirty = false;

      const elapsed = Math.min(timestamp - lastFrameTime, 50);
      lastFrameTime = timestamp;
      const scene = mobileCanvas ? scenes.hero : getCurrentScene();
      const impulse = reducedMotion || mobileCanvas ? 0 : scrollImpulse;

      gradient.setColors(scene.colors);
      gradient.setMotion({
        speed: reducedMotion
          ? 0
          : Math.min(
              1,
              scene.motion.speed + impulse * 0.5 * scene.motion.disturbance,
            ),
        amplitude: Math.min(
          1,
          scene.motion.amplitude + impulse * 0.35 * scene.motion.disturbance,
        ),
      });
      if (reducedMotion) gradient.render();

      scrollImpulse *= Math.exp(-elapsed / 420);
      if (scrollImpulse <= 0.002) {
        // Apply the exact resting motion on the next draw.
        sceneDirty = scrollImpulse > 0;
        scrollImpulse = 0;
      }
    };

    // Animated scenes update immediately before the WebGL draw, not in a
    // second animation loop that can leave the displayed palette a frame behind.
    gradient.beforeRender = updateScene;

    const requestSceneUpdate = () => {
      sceneDirty = true;
      if (!reducedMotion || animationFrame || document.hidden) return;
      animationFrame = window.requestAnimationFrame(updateScene);
    };

    const updatePlayback = () => {
      if (reducedMotion || document.hidden || !canvasVisible) {
        gradient.pause();
      } else {
        lastFrameTime = performance.now();
        gradient.play();
      }
      requestSceneUpdate();
    };

    const handleScroll = () => {
      const distance = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;

      if (mobileCanvas) return;

      if (!reducedMotion) {
        scrollImpulse = Math.min(
          0.55,
          scrollImpulse + (distance / window.innerHeight) * 1.8,
        );
      }

      requestSceneUpdate();
    };

    let resizeFrame;
    const handleResize = () => {
      if (resizeFrame !== undefined) return;
      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = undefined;
        measureSections();
        requestSceneUpdate();
      });
    };

    const handleCanvasModeChange = (event) => {
      mobileCanvas = event.matches;
      scrollImpulse = 0;
      handleResize();
    };

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      canvasVisible = entry.isIntersecting;
      updatePlayback();
    });
    intersectionObserver.observe(canvasRef.current.parentElement);

    const resizeObserver = new ResizeObserver(handleResize);
    sections.forEach((section) => resizeObserver.observe(section));

    measureSections();
    updateScene();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", updatePlayback);
    updatePlayback();
    mobileCanvasQuery.addEventListener("change", handleCanvasModeChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", updatePlayback);
      intersectionObserver.disconnect();
      mobileCanvasQuery.removeEventListener("change", handleCanvasModeChange);
      resizeObserver.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      if (resizeFrame !== undefined) window.cancelAnimationFrame(resizeFrame);
      gradient.disconnect();
    };
  }, []);

  return (
    <div
      className="responsive-gradient-surface pointer-events-none inset-x-0 z-0"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        id="gradient-canvas"
        className="absolute inset-0 h-full w-full"
      />
      <div className="mobile-gradient-fade absolute inset-0" />
    </div>
  );
};

export default HomeGradient;
