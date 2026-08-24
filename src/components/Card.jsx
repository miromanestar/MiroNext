import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, CodeBracketIcon } from "@heroicons/react/20/solid";

const Card = ({ data }) => {
  const external = data.href.startsWith("http");

  return (
    <article className="bg-background/45 group hover:border-highlight/40 relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/15 shadow-md backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden sm:h-48">
        <Image
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          src={data.image}
          alt={`${data.name} project preview`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />

        <span className="bg-background/60 absolute top-3 left-3 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm sm:top-4 sm:left-4">
          {data.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {data.name}
        </h3>
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-6 text-gray-300 sm:line-clamp-3">
          {data.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 sm:mt-6">
          <Link
            href={data.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            className="text-highlight group/link inline-flex items-center gap-1.5 text-sm font-semibold after:absolute after:inset-0 after:content-['']"
          >
            View project
            <ArrowUpRightIcon
              className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
          {data.source && (
            <a
              href={data.source}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-white"
            >
              <CodeBracketIcon className="h-4 w-4" aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;
