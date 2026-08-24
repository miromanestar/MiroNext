"use client";

import { useEffect, useRef } from "react";

import { Gradient } from "./Gradient";

const gradient = new Gradient();

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

    gradient.initGradient("#gradient-canvas");

    const sections = Array.from(
      document.querySelectorAll("[data-gradient-palette]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const mobileCanvas = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion) gradient.pause();

    let stops = [];
    let animationFrame;
    let scrollImpulse = 0;
    let lastScrollY = window.scrollY;
    let lastFrameTime = performance.now();

    const measureSections = () => {
      stops = sections
        .map((section, index) => {
          const top = section.getBoundingClientRect().top + window.scrollY;
          const anchor =
            index === 0
              ? top + section.offsetHeight / 2
              : top +
                Math.min(section.offsetHeight * 0.15, window.innerHeight * 0.2);

          return {
            center: anchor,
            scene: scenes[section.dataset.gradientPalette],
          };
        })
        .filter((stop) => stop.scene);
    };

    const getCurrentScene = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;

      if (viewportCenter <= stops[0].center) return stops[0].scene;
      if (viewportCenter >= stops.at(-1).center) return stops.at(-1).scene;

      for (let index = 0; index < stops.length - 1; index += 1) {
        const current = stops[index];
        const next = stops[index + 1];

        if (viewportCenter < current.center || viewportCenter > next.center) {
          continue;
        }

        const progress = smoothstep(
          (viewportCenter - current.center) / (next.center - current.center),
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
      if (!stops.length) return;

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
      if (scrollImpulse > 0.002) {
        animationFrame = window.requestAnimationFrame(updateScene);
      }
    };

    const requestSceneUpdate = () => {
      if (animationFrame) return;
      lastFrameTime = performance.now();
      animationFrame = window.requestAnimationFrame(updateScene);
    };

    const handleScroll = () => {
      const distance = Math.abs(window.scrollY - lastScrollY);
      lastScrollY = window.scrollY;

      if (!reducedMotion) {
        scrollImpulse = Math.min(
          0.55,
          scrollImpulse + (distance / window.innerHeight) * 1.8,
        );
      }

      requestSceneUpdate();
    };

    const handleResize = () => {
      measureSections();
      requestSceneUpdate();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    sections.forEach((section) => resizeObserver.observe(section));

    measureSections();
    updateScene();
    if (!mobileCanvas) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
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
