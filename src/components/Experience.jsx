import {
  CalendarIcon,
  MapPinIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/20/solid";

const positions = [
  {
    title: "Software Engineer",
    type: "Current",
    location: "Chattanooga, TN",
    company: "Tennessee Valley Authority",
    start: "2020-01-07",
    end: "2020-01-07",
    startFull: "February 2022",
    endFull: "Present",
  },
  {
    title: "Adjunct Professor",
    type: "Part Time",
    location: "Collegedale, TN",
    company: "Southern Adventist University",
    start: "2024-01-07",
    end: "2024-05-08",
    startFull: "January 2024",
    endFull: "Present",
  },
  {
    title: "Software Engineer",
    type: "Freelance",
    location: "Chattanooga, TN",
    company: "Various Clients",
    start: "2020-01-07",
    end: "2020-01-07",
    startFull: "August 2021",
    endFull: "Present",
  },
];

const Experience = () => {
  return (
    <div className="w-full px-4 pt-8">
      <h2 className="pb-8 text-center text-3xl font-bold text-white sm:text-4xl">
        My Qualifications
      </h2>
      <div className="bg-background mx-auto max-w-(--breakpoint-xl) overflow-hidden rounded-md shadow-sm">
        <ul role="list" className="divide-y divide-gray-600">
          {positions.map((position, i) => (
            <li key={i}>
              <div className="block">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="text-highlight truncate text-sm font-medium">
                      {position.title}
                    </p>
                    <div className="ml-2 flex shrink-0">
                      <p className="bg-nordgreen text-background inline-flex rounded-full px-2 text-xs leading-5 font-semibold">
                        {position.type}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <BuildingOffice2Icon
                          className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {position.company}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <MapPinIcon
                          className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {position.location}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <CalendarIcon
                        className="mr-1.5 h-5 w-5 shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <p>
                        <time dateTime={position.start}>
                          {position.startFull}
                        </time>{" "}
                        &ndash;{" "}
                        <time dateTime={position.end}>{position.endFull}</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
