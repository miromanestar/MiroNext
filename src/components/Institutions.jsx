import {
  BuildingLibraryIcon,
  CalendarIcon,
  AcademicCapIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const Institutions = ({ institutions }) => {
  return (
    <div className="w-full px-4 py-8">
      <div className="mx-auto flex max-w-(--breakpoint-xl) flex-wrap justify-center gap-6">
        {institutions.map((s, i) => (
          <div
            key={`institution-${i}`}
            className="bg-tertiaryBg w-full flex-1 divide-y divide-gray-500 rounded-lg shadow-sm md:w-auto"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex flex-col gap-4 md:flex-row">
                  <h3 className="truncate text-lg font-medium text-white">
                    {s.degree}
                  </h3>
                  <div className="bg-nordred flex w-fit gap-1 rounded-full p-1 px-2 text-xs leading-5 font-semibold text-white md:pt-1">
                    <AcademicCapIcon
                      className="h-5 w-5 text-gray-200"
                      aria-hidden="true"
                    />
                    {s.level}
                  </div>
                </div>
                <div className="mt-4 flex gap-2 truncate text-sm text-gray-300">
                  <BuildingLibraryIcon
                    className="h-5 w-5 text-gray-200"
                    aria-hidden="true"
                  />
                  {s.institution}
                </div>
                {s.date && (
                  <div className="mt-1 flex gap-2 truncate text-sm text-gray-300">
                    <CalendarIcon
                      className="h-5 w-5 text-gray-200"
                      aria-hidden="true"
                    />
                    {s.date}
                  </div>
                )}
              </div>
              {/* <img className="h-[100px] w-[100px] shrink-0 rounded-full bg-highlight2 p-2" src={s.imageUrl} alt="" /> */}
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-600">
                <div className="flex w-0 flex-1">
                  <a
                    href={s.website}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Institutions;
