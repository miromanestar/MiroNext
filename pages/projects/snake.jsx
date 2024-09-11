"use client";
import React from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

import Template from "../../components/Template";

// const WASM = dynamic({
//     loader: async function () {
//         const snakeWASM = await import('../../wasm/snake.wasm')

//         return () => (
//             <div className="mx-auto max-w-7xl px-6 lg:px-8">
//                 {load(snakeWASM)}
//             </div>
//         )
//     },
//     ssr: false

// })

const Snake = () => (
  <Template title="Snake" names={["", "Snake with Rust"]}>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-5xl sm:text-center">
        <h2 className="text-base font-semibold leading-7 text-highlight text-center">
          Built with Rust and compiled for WASM
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
          Snake
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          A super simple (And slightly buggy) concept of a game running in WASM,
          written in Rust!
        </p>

        <Script src="/wasm/gl.js" onLoad={() => load("/wasm/snake.wasm")} />
        <canvas
          className="mt-8"
          id="glcanvas"
          tabIndex={1}
          autoFocus={true}
          width="800"
          height="600"
        />
      </div>
    </div>
  </Template>
);

export default Snake;
