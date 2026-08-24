import Template from "../../../components/Template";

const RayCalc = () => (
  <Template title="RayCalc" names={["", "RayCalc"]}>
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-highlight text-base leading-7 font-semibold">
        A cross-platform radiation dosimetry app for emergency situations!
      </h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        RayCalc
      </p>
      <a
        href="https://github.com/miromanestar/raycalc2"
        className="hover:border-highlight/40 hover:text-highlight mx-auto mt-3 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm transition duration-200 hover:bg-white/7"
      >
        View Source
      </a>
      <p className="mt-4 text-base leading-7 text-gray-300">
        RayCalc is a lightweight, simple calculator for radiation dosimetry
        calculations when on call. Its purpose is not to replace professional
        software, but to provide a verification solution during emergency
        situations to aid against human error. The calculator utilizes data
        tables taken directly from Northside Forsyth hospital, and uses
        industry-standard formulas, along with some minor interpolation to
        obtain answers that have been tested to be with a less than 1% error
        margin.
      </p>

      <p className="mt-3 text-base leading-7 text-gray-300">
        View this{" "}
        <a href="https://raycalc.com/" className="text-highlight">
          link
        </a>{" "}
        for a demo of Raycalc.
      </p>

      <p className="mt-8 text-2xl font-bold tracking-tight text-white sm:mt-10">
        RayCalc 1.0
      </p>
      <p className="mt-3 text-base leading-7 text-gray-300">
        Raycalc originally was built with Swift in XCode, and represents one of
        my first forays into software development.
        <br />
        Visit this{" "}
        <a
          href="https://github.com/miromanestar/DosimetryCalculator"
          className="text-highlight"
        >
          link
        </a>{" "}
        to see the repository for the original version.
      </p>
    </div>
  </Template>
);

export default RayCalc;
