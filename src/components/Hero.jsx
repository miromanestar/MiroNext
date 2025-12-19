"use client";

import React, { useEffect, useRef } from "react";
import { Gradient } from "./Gradient";

const gradient = new Gradient();

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      gradient.initGradient("#gradient-canvas");
    }
  });

  return (
    <div className="relative flex h-screen items-center justify-center px-10 text-center shadow-lg md:px-24">
      <div className="relative z-30 text-white">
        <div className="text-4xl font-medium md:text-6xl">
          <div className="animated-title drop-shadow-md">
            <div className="text-top">
              <div>
                <span>Transforming</span>
                <span>lines of code into works of art</span>
              </div>
            </div>
            <div className="text-bottom">
              <div>one keystroke at a time.</div>
            </div>
          </div>
        </div>
      </div>

      <canvas
        ref={canvasRef}
        id="gradient-canvas"
        className="absolute z-0 h-[70vh] w-full drop-shadow-xs lg:h-[75vh]"
      ></canvas>
    </div>
  );
};

export default Hero;
