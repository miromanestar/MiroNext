import Link from "next/link";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/20/solid";

const Hero = ({ profile, githubHref }) => {
  return (
    <section
      data-gradient-palette="hero"
      className="relative z-10 flex min-h-svh items-center px-6 py-28 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="hero-secondary text-background/80 text-sm font-bold tracking-[0.22em] uppercase">
          {profile.name} <span aria-hidden="true">·</span>{" "}
          {profile.hero.eyebrow}
        </p>

        <h1
          className="hero-statement text-background mt-7 max-w-6xl text-5xl leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl"
          aria-label={`${profile.hero.statement.lead} ${profile.hero.statement.body} ${profile.hero.statement.closing}`}
        >
          <span className="hero-reveal-line">
            <span className="text-tertiaryBg">
              {profile.hero.statement.lead}
            </span>
          </span>
          <span className="hero-reveal-line hero-reveal-line-delayed">
            <span>{profile.hero.statement.body}</span>
          </span>
          <span className="hero-statement-divider" aria-hidden="true" />
          <span className="hero-reveal-line hero-reveal-closing">
            <span className="text-white drop-shadow-md">
              {profile.hero.statement.closing}
            </span>
          </span>
        </h1>

        <div className="hero-secondary mt-9 flex flex-wrap items-center gap-6">
          <Link
            href="#selected-work"
            className="bg-background hover:bg-tertiaryBg focus-visible:outline-background inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            See more
            <ArrowDownIcon className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={githubHref}
            className="border-background/25 text-background focus-visible:outline-background group inline-flex items-center gap-2 rounded-full border bg-white/25 px-6 py-3.5 font-semibold shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/45 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            GitHub
            <ArrowUpRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
