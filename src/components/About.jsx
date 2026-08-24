import Image from "next/image";

const About = ({ profile }) => (
  <section
    data-gradient-palette="about"
    className="relative z-10 px-6 py-12 sm:px-8 sm:py-20 lg:px-12 lg:py-32"
  >
    <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 sm:gap-10 lg:flex-row lg:justify-between">
      <div className="w-full lg:max-w-3xl">
        <p className="text-highlight text-sm font-semibold tracking-[0.2em] uppercase">
          About me
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Engineering, research, and teaching
        </h2>
        <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-gray-200">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-3">
          {profile.quickFacts.map((fact) => (
            <div key={fact.label} className="border-t border-white/20 pt-3">
              <dt className="text-xs font-semibold tracking-[0.15em] text-gray-400 uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-6 font-medium text-white">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Image
        className="mx-auto aspect-4/5 w-full max-w-72 rounded-xl border border-white/15 object-cover object-top shadow-xl sm:max-w-xs lg:mx-0 lg:max-w-sm"
        src={profile.images.portrait.src}
        alt={profile.images.portrait.alt}
        width={profile.images.portrait.width}
        height={profile.images.portrait.height}
      />
    </div>
  </section>
);

export default About;
