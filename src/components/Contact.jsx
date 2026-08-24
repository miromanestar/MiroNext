import { ArrowUpRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

const Contact = ({ emailHref, linkedinHref }) => (
  <section
    data-gradient-palette="contact"
    className="relative z-10 px-6 py-12 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
  >
    <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between lg:gap-12">
      <div className="max-w-2xl">
        <p className="text-highlight text-sm font-semibold tracking-[0.2em] uppercase">
          Get in touch
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Have an interesting problem to solve?
        </h2>
        <p className="mt-5 text-lg leading-8 text-gray-200">
          I&apos;m always interested in thoughtful engineering conversations,
          ambitious projects, and opportunities to build useful software.
        </p>
      </div>
      <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4 lg:mt-0 lg:shrink-0">
        <a
          href={emailHref}
          className="bg-highlight text-background inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:brightness-110"
        >
          <EnvelopeIcon className="h-4 w-4" aria-hidden="true" />
          Send an email
        </a>
        <a
          href={linkedinHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/5"
        >
          LinkedIn
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
