import React from 'react'
import { CalendarIcon, UserCircleIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid'


const PaperDetails = ({ data }) => (
    <div className="lg:col-start-3 lg:row-end-1 shadow-lg">
        <div className="rounded-lg bg-tertiaryBg shadow-sm ring-1 ring-gray-600">
            <dl className="flex flex-wrap">
                <div className="flex-auto pl-6 pt-6">
                    <dt className="text-sm font-semibold leading-6 text-white">{data.title}</dt>
                    <dd className="mt-1 text-base font-semibold leading-6 tracking-wide text-white">{data.journal}</dd>
                </div>
                <div className="flex-none self-end px-6 pt-4">
                    <dt className="sr-only">Status</dt>
                    <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {data.status}
                    </dd>
                </div>
                <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-500 px-6 pt-6">
                    <dt className="flex-none">
                        <span className="sr-only">Authors</span>
                        <UserCircleIcon className="h-6 w-5 text-white" aria-hidden="true" />
                    </dt>
                    <dd className="text-sm leading-6 text-white tracking-wide whitespace-pre">{data.authors.join('\n')}</dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                        <span className="sr-only">Published</span>
                        <CalendarIcon className="h-6 w-5 text-white" aria-hidden="true" />
                    </dt>
                    <dd className="text-sm leading-6 text-white">
                        <time dateTime="2023-01-31">{data.published}</time>
                    </dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <dt className="flex-none">
                        <span className="sr-only">Institutions</span>
                        <BuildingLibraryIcon className="h-6 w-5 text-white" aria-hidden="true" />
                    </dt>
                    <dd className="text-sm leading-6 text-white whitespace-pre">{data.institutions.join('\n')}</dd>
                </div>
            </dl>
            <div className="mt-6 border-t border-gray-500 px-6 py-6">
                <a href={data.url} className="text-sm tracking-widest text-white duration-100 hover:text-highlight">
                    View Publication <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </div>
    </div>
)

export default PaperDetails