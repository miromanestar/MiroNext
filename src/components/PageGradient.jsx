"use client";

import { useEffect } from "react";

import { Gradient } from "./Gradient";

const palettes = [
  ["#2e3440", "#2f3540", "#343d4d", "#33414e"],
  ["#2e3440", "#2f3640", "#333f48", "#354548"],
  ["#2e3440", "#32343f", "#3b3c4d", "#403d4b"],
  ["#2e3440", "#303641", "#343e4e", "#344450"],
  ["#2e3440", "#30363f", "#363f47", "#3b4646"],
  ["#2e3440", "#33343d", "#3d3b48", "#423e49"],
];

const hashTitle = (title) =>
  Array.from(title).reduce(
    (hash, character) => (hash * 31 + character.charCodeAt(0)) | 0,
    0,
  );

const PageGradient = ({ title }) => {
  const palette = palettes[Math.abs(hashTitle(title)) % palettes.length];

  useEffect(() => {
    const gradient = new Gradient({
      maxWidth: 1280,

      density: [0.03, 0.06],
    });
    gradient.initGradient("#page-gradient-canvas");
    gradient.setColors(
      palette.map((hex) =>
        [1, 3, 5].map((offset) =>
          Number.parseInt(hex.slice(offset, offset + 2), 16) / 255,
        ),
      ),
    );

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      gradient.setMotion({
        speed: reducedMotion.matches ? 0 : 0.35,
        amplitude: 0.18,
      });
      if (reducedMotion.matches || document.hidden) {
        gradient.pause();
        gradient.render();
      } else {
        gradient.play();
      }
    };

    updatePlayback();
    reducedMotion.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);

    return () => {
      reducedMotion.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
      gradient.disconnect();
    };
  }, [palette]);

  return (
    <div
      className="responsive-gradient-surface pointer-events-none inset-x-0 z-0"
      aria-hidden="true"
    >
      <canvas
        id="page-gradient-canvas"
        className="page-gradient-canvas absolute inset-0 h-full w-full"
        style={{
          "--gradient-color-1": palette[0],
          "--gradient-color-2": palette[1],
          "--gradient-color-3": palette[2],
          "--gradient-color-4": palette[3],
        }}
      />
      <div className="mobile-gradient-fade absolute inset-0" />

    </div>
  );
};

export default PageGradient;
