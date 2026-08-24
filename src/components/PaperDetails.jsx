import React from "react";
import {
  CalendarIcon,
  UserCircleIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

const PaperDetails = ({ data }) => (
  <div className="w-full min-w-0 lg:col-start-3 lg:row-end-1">
    <div className="bg-background/45 overflow-hidden rounded-2xl border border-white/15 shadow-md backdrop-blur-md">
      <dl className="flex flex-wrap">
        <div className="min-w-0 flex-auto pt-4 pl-4 sm:pt-6 sm:pl-6">
          <dt className="text-sm leading-6 font-semibold text-white">
            {data.title}
          </dt>
          <dd className="mt-1 text-base leading-6 font-semibold tracking-wide text-white">
            {data.journal}
          </dd>
        </div>
        <div className="flex-none self-end px-4 pt-4 sm:px-6">
          <dt className="sr-only">Status</dt>
          <dd className="inline-flex items-center rounded-md border border-green-300/20 bg-green-300/10 px-2 py-1 text-xs font-medium text-green-200">
            {data.status}
          </dd>
        </div>
        <div className="mt-4 flex w-full min-w-0 flex-none gap-x-3 border-t border-white/10 px-4 pt-4 sm:mt-6 sm:gap-x-4 sm:px-6 sm:pt-6">
          <dt className="flex-none">
            <span className="sr-only">Authors</span>
            <UserCircleIcon
              className="h-6 w-5 text-gray-300"
              aria-hidden="true"
            />
          </dt>
          <dd className="min-w-0 text-sm leading-6 tracking-wide whitespace-pre-wrap text-gray-300">
            {data.authors.join("\n")}
          </dd>
        </div>
        <div className="mt-4 flex w-full min-w-0 flex-none gap-x-3 px-4 sm:gap-x-4 sm:px-6">
          <dt className="flex-none">
            <span className="sr-only">Published</span>
            <CalendarIcon
              className="h-6 w-5 text-gray-300"
              aria-hidden="true"
            />
          </dt>
          <dd className="text-sm leading-6 text-gray-300">
            <time dateTime="2023-01-31">{data.published}</time>
          </dd>
        </div>
        <div className="mt-4 flex w-full min-w-0 flex-none gap-x-3 px-4 sm:gap-x-4 sm:px-6">
          <dt className="flex-none">
            <span className="sr-only">Institutions</span>
            <BuildingLibraryIcon
              className="h-6 w-5 text-gray-300"
              aria-hidden="true"
            />
          </dt>
          <dd className="min-w-0 text-sm leading-6 whitespace-pre-wrap text-gray-300">
            {data.institutions.join("\n")}
          </dd>
        </div>
      </dl>
      <div className="mt-4 border-t border-white/10 px-4 py-4 sm:mt-6 sm:px-6 sm:py-6">
        <a
          href={data.url}
          className="hover:text-highlight text-sm tracking-widest text-white duration-100"
        >
          View Publication <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </div>
);

export default PaperDetails;
