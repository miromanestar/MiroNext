import { GlobeAltIcon } from '@heroicons/react/20/solid'

const schools = [
    {
        institution: 'Southern Adventist University',
        degree: 'Computer Science',
        level: 'Masters of Science',
        website: 'https://southern.edu',
        date: 'August 2020 - May 2023',
        imageUrl:
            'https://www.thestudentloancalculator.com/wp-content/uploads/2020/08/mzi.gteaeddn-removebg-preview.png',
    },
    {
        institution: 'University of North Georgia',
        degree: 'Computer Science',
        level: 'Associate of Science',
        website: 'https://ung.edu',
        date: 'August 2018 - May 2020',
        imageUrl:
            'https://i.imgur.com/FANSBxD.png',
    },
]

const Education = () => {
    return (
        <div className="bg-secondaryBg w-full py-8 px-4">
            <div className=" mx-auto max-w-screen-xl flex flex-wrap gap-6 justify-center">
                {schools.map((s, i) => (
                    <div key={`institution-${i}`} className="w-full md:w-auto flex-1 divide-y divide-gray-500 rounded-lg bg-tertiaryBg shadow">
                        <div className="flex w-full items-center justify-between space-x-6 p-6">
                            <div className="flex-1 truncate">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <h3 className="truncate text-lg font-medium text-white">{s.degree}</h3>
                                    <div className="w-fit md:inline-flex rounded-full bg-nordred px-2 md:pt-1 text-xs font-semibold leading-5 text-white">
                                        {s.level}
                                    </div>
                                </div>
                                <p className="mt-4 truncate text-sm text-gray-300">{s.institution}</p>
                                <p className="mt-1 truncate text-sm text-gray-300">{s.date}</p>
                            </div>
                            <img className="h-[100px] w-[100px] flex-shrink-0 rounded-full bg-highlight2 p-2" src={s.imageUrl} alt="" />
                        </div>
                        <div>
                            <div className="-mt-px flex divide-x divide-gray-600">
                                <div className="flex w-0 flex-1">
                                    <a
                                        href={s.website}
                                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium duration-200 text-highlight hover:text-gray-200"
                                    >
                                        <GlobeAltIcon className="h-5 w-5 text-gray-200" aria-hidden="true" />
                                        <span className="ml-3">Website</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Education