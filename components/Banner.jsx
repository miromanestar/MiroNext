import React, { useEffect, useRef } from "react";
import { Gradient } from "./Gradient";

const gradient = new Gradient();

const Banner = ({ title }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      gradient.initGradient("#gradient-canvas");
    }
  }, []);

  return (
    <div className="flex h-[25vh] flex-col items-center justify-center">
      <h2 className="text-secondaryBg z-10 mt-16 text-center text-4xl font-bold tracking-tight drop-shadow-md sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <canvas
        ref={canvasRef}
        id="gradient-canvas"
        className="absolute z-0 h-[inherit]! w-full drop-shadow-xs"
      ></canvas>
    </div>
  );
};

export default Banner;
