import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'

const positions = [
    {
        title: 'Software Engineering Intern',
        type: 'Part Time',
        location: 'Chattanooga, TN',
        company: 'Tennessee Valley Authority',
        start: '2020-01-07',
        end: '2020-01-07',
        startFull: 'January 7, 2020',
        endFull: 'Present',
    },
    {
        title: 'Resident Assistant',
        type: 'Part Time',
        location: 'Collegedale, TN',
        company: 'Southern Adventist University',
        start: '2020-01-07',
        end: '2020-01-07',
        startFull: 'January 7, 2020',
        endFull: 'Present',
    },
    {
        title: 'Computer Technician',
        type: 'Part Time',
        location: 'Cumming, GA',
        company: 'Experimax',
        start: '2020-01-14',
        end: '2020-01-14',
        startFull: 'January 14, 2020',
        endFull: 'Present',
    },
]

const Experience = () => {
    return (
        <div className="bg-secondaryBg w-full py-8 px-4">
            <h2 className="text-center pb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">My Qualifications</h2>
            <div className="overflow-hidden bg-background shadow rounded-md max-w-screen-xl mx-auto">
                <ul role="list" className="divide-y divide-gray-600">
                    {positions.map((position, i) => (
                        <li key={i}>
                            <a href="#" className="block duration-200 hover:bg-tertiaryBg">
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
                                                <UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
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
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Experience