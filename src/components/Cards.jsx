import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <section
      id="selected-work"
      data-gradient-palette="projects"
      className="relative z-10 scroll-mt-24 px-6 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="selected-work-eyebrow text-sm font-semibold tracking-[0.2em] uppercase">
            Selected work
          </p>
          <h2 className="selected-work-title mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Projects with purpose
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((project) => (
            <Card key={project.href} data={project} />
          ))}
        </div>

        <div className="mt-7 flex justify-center sm:mt-8">
          <Link
            href="/projects"
            className="group hover:border-highlight/60 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
          >
            Explore all projects
            <ArrowRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cards;
