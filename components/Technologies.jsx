import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

const Technologies = ({ data }) => (
  <ul
    role="list"
    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
  >
    {data.map((d) => (
      <li
        key={d.title}
        className="bg-secondaryBg col-span-1 flex flex-col divide-y divide-gray-500 rounded-lg shadow-sm"
      >
        <div className="w-full flex-1 p-6">
          <div className="flex items-center space-x-3">
            <h3 className="text-md font-medium text-white">{d.title}</h3>
            <span className="inline-flex shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
              {d.type}
            </span>
          </div>
          <div className="mt-4 h-full text-justify text-sm text-gray-200">
            {d.content}
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-600">
            <div className="flex w-0 flex-1">
              <a
                href={d.url}
                className="text-highlight relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium duration-200 hover:text-gray-200"
              >
                <GlobeAltIcon
                  className="h-5 w-5 text-gray-200"
                  aria-hidden="true"
                />
                <span className="ml-3">Website</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    ))}
  </ul>
);

export default Technologies;
