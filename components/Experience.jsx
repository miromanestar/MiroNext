import { CalendarIcon, MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/20/solid'

const positions = [
    {
        title: 'Software Engineer A',
        type: 'Full Time',
        location: 'Chattanooga, TN',
        company: 'Tennessee Valley Authority',
        start: '2020-01-07',
        end: '2020-01-07',
        startFull: 'August 2023',
        endFull: 'Present',
    },
    {
        title: 'Software Engineering Intern',
        type: 'Part Time',
        location: 'Chattanooga, TN',
        company: 'Tennessee Valley Authority',
        start: '2020-01-07',
        end: '2020-01-07',
        startFull: 'February 2022',
        endFull: 'August 2023',
    },
    {
        title: 'Resident Assistant',
        type: 'Part Time',
        location: 'Collegedale, TN',
        company: 'Southern Adventist University',
        start: '2020-01-07',
        end: '2020-01-07',
        startFull: 'August 2021',
        endFull: 'May 2023',
    },
]

const Experience = () => {
    return (
        <div className="w-full pt-8 px-4">
            <h2 className="text-center pb-8 text-3xl font-bold text-white sm:text-4xl">My Qualifications</h2>
            <div className="overflow-hidden bg-background shadow rounded-md max-w-screen-xl mx-auto">
                <ul role="list" className="divide-y divide-gray-600">
                    {positions.map((position, i) => (
                        <li key={i}>
                            <div className="block">
                                <div className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <p className="truncate text-sm font-medium text-highlight">{position.title}</p>
                                        <div className="ml-2 flex flex-shrink-0">
                                            <p className="inline-flex rounded-full bg-nordgreen px-2 text-xs font-semibold leading-5 text-background">
                                                {position.type}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                            <p className="flex items-center text-sm text-gray-500">
                                                <BuildingOffice2Icon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                {position.company}
                                            </p>
                                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                                <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                {position.location}
                                            </p>
                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                            <p>
                                                <time dateTime={position.start}>{position.startFull}</time> &ndash; <time dateTime={position.end}>{position.endFull}</time>
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
    )
}

export default Experience