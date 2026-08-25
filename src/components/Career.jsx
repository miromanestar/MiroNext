import Image from "next/image";
import {
  ArrowUpRightIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

const Career = ({ positions, education }) => (
  <section
    data-gradient-palette="career"
    className="relative z-10 px-6 py-12 sm:px-8 sm:py-20 lg:px-12 lg:py-32"
  >
    <div className="mx-auto max-w-7xl">
      <div className="max-w-3xl">
        <p className="text-highlight text-sm font-semibold tracking-[0.2em] uppercase">
          Background
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Experience and education
        </h2>
        <p className="mt-5 text-lg leading-8 text-gray-300">
          I’m an engineer who turns complexity into clarity, one problem at a time.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-2 lg:gap-8">
        <div className="lg:max-w-xl">
          <h3 className="text-sm font-semibold tracking-[0.18em] text-gray-400 uppercase">
            Experience
          </h3>
          <ol className="relative mt-7 ml-6 border-l border-white/15">
            {positions.map((position) => (
              <li
                key={position.company}
                className="relative pb-10 pl-10 last:pb-0 sm:pb-12"
              >
                <Image
                  src={position.logo}
                  alt={`${position.company} logo`}
                  width={48}
                  height={48}
                  className="absolute top-0 -left-6 h-12 w-12 rounded-lg border border-white/35 object-cover shadow-lg ring-4 ring-white/10"
                />
                <p className="text-highlight text-sm font-semibold">
                  {position.startLabel} &ndash; {position.endLabel}
                </p>
                <h4 className="mt-2 text-xl font-semibold text-white">
                  {position.title}
                </h4>
                <p className="mt-2 text-gray-300">{position.company}</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-gray-400">
                  <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                  {position.location} · {position.type}
                </p>
                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-300">
                  {position.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Skills">
                  {position.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <span
              className="bg-highlight absolute -bottom-1 -left-1.5 h-3 w-3 rounded-full"
              aria-hidden="true"
            />
          </ol>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] text-gray-400 uppercase">
            Education
          </h3>
          <div className="mt-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
              <div className="min-w-0">
                <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3">
                  <Image
                    src={education.logo}
                    alt={`${education.institution} logo`}
                    width={52}
                    height={52}
                    className="h-13 w-13 rounded-lg border border-white/35 object-cover shadow-lg ring-4 ring-white/10"
                  />
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-white sm:truncate sm:text-xl">
                      {education.institution}
                    </h4>
                    <p className="mt-1 text-sm text-gray-400">
                      {education.location}
                    </p>
                  </div>
                </div>
                <a
                  href={education.website}
                  target="_blank"
                  rel="noreferrer"
                  className="text-highlight group mt-2.5 inline-flex items-center gap-2 text-sm font-semibold transition hover:text-white"
                >
                  Visit school website
                  <ArrowUpRightIcon
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <p className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">
                  Class of
                </p>
                <p className="text-highlight/75 mt-1 font-mono text-3xl font-bold tracking-tighter">
                  {education.graduationYear}
                </p>
              </div>
            </div>


            <ol className="mt-3 divide-y divide-white/15">
              {education.degrees.map((degree, index) => (
                <li
                  key={`${degree.level}-${degree.field}`}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 py-5"
                >
                  <span className="font-mono text-sm text-gray-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-gray-300 uppercase">
                      {degree.field}
                    </p>
                    <p className="mt-1.5 text-lg font-semibold text-white">
                      {degree.level}
                    </p>
                    <p className="mt-1.5 text-sm text-gray-400">
                      {degree.date}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Career;
