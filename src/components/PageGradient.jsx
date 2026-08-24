"use client";

import { useEffect, useRef } from "react";

import { Gradient } from "./Gradient";

const palettes = [
  ["#2e3440", "#2f3540", "#313944", "#343e4b"],
  ["#2e3440", "#2f3640", "#323d40", "#354541"],
  ["#2e3440", "#32343f", "#393842", "#403b46"],
  ["#2e3440", "#303641", "#333d47", "#384753"],
  ["#2e3440", "#30363f", "#343d3c", "#39443e"],
  ["#2e3440", "#33343d", "#3b383f", "#433b41"],
];

const hashTitle = (title) =>
  Array.from(title).reduce(
    (hash, character) => (hash * 31 + character.charCodeAt(0)) | 0,
    0,
  );

const toRgb = (hex) => [
  Number.parseInt(hex.slice(1, 3), 16) / 255,
  Number.parseInt(hex.slice(3, 5), 16) / 255,
  Number.parseInt(hex.slice(5, 7), 16) / 255,
];

const PageGradient = ({ title }) => {
  const canvasRef = useRef(null);
  const palette = palettes[Math.abs(hashTitle(title)) % palettes.length];

  useEffect(() => {
    if (!canvasRef.current) return;

    const pageGradient = new Gradient();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    pageGradient.initGradient("#page-gradient-canvas");
    pageGradient.setColors(palette.map(toRgb));
    pageGradient.setMotion({
      speed: reducedMotion ? 0 : 0.002,
      amplitude: 0.006,
    });
    if (reducedMotion) pageGradient.pause();

    return () => {
      pageGradient.pause();
      pageGradient.disconnect();
    };
  }, [palette]);

  return (
    <div
      className="responsive-gradient-surface pointer-events-none inset-x-0 z-0"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
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
