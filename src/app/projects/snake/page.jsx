import Template from "../../../components/Template";

const Snake = () => (
  <Template title="Snake" names={["", "Snake with Rust"]}>
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-highlight text-center text-base leading-7 font-semibold">
        Built with Rust and compiled for WASM
      </h2>
      <p className="mt-2 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Snake
      </p>
      <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-300">
        A super simple (And slightly buggy) concept of a game running in WASM,
        written in Rust!
      </p>

      <iframe
        src="/wasm/snake.html"
        title="Snake game"
        className="mx-auto mt-6 block aspect-square w-full max-w-3xl rounded-2xl border border-white/10 bg-white/3 p-1 shadow-sm sm:mt-8"
      />
    </div>
  </Template>
);

export default Snake;
