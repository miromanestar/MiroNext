import { GlobeAltIcon } from "@heroicons/react/24/solid";

const Technologies = ({ data }) => (
  <ul
    role="list"
    className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
  >
    {data.map((d) => (
      <li
        key={d.title}
        className="bg-background/35 col-span-1 flex flex-col divide-y divide-white/10 rounded-2xl border border-white/15 shadow-sm backdrop-blur-sm"
      >
        <div className="w-full flex-1 p-4 sm:p-6">
          <div className="flex items-center space-x-3">
            <h3 className="text-md font-medium text-white">{d.title}</h3>
            <span className="inline-flex shrink-0 items-center rounded-full border border-green-300/20 bg-green-300/10 px-1.5 py-0.5 text-xs font-medium text-green-200">
              {d.type}
            </span>
          </div>
          <div className="mt-3 h-full text-sm leading-6 text-gray-300 sm:mt-4 sm:text-justify">
            {d.content}
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-white/10">
            <div className="flex w-0 flex-1">
              <a
                href={d.url}
                className="text-highlight relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-b-2xl border border-transparent py-3 text-sm font-medium duration-200 hover:bg-white/5 hover:text-gray-200 sm:py-4"
              >
                <GlobeAltIcon
                  className="h-5 w-5 text-gray-300"
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
