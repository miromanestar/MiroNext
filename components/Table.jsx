import React from 'react'

const Table = ({ table, boldFirst }) => (
    <div className="px-4 mt-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-white">{table.title}</h1>
                <p className="mt-2 text-sm text-gray-400">{table.subtitle}</p>
            </div>
        </div>
        <div className="mt-4 flow-root">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                <div className="inline-block py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden ring-2 ring-gray-100 ring-opacity-5 rounded-lg">
                        <table className="divide-y divide-gray-600">
                            <thead className="bg-secondaryBg">
                                <tr>
                                    {table.headers.map((h, i) => i !== 0 ? (
                                        <th key={`${table.title}-${h}`} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-highlight">{h}</th>
                                    ) : (
                                        <th key={`${table.title}-${h}`} scope="col" className="py-3.5 pl-4 pr-10 text-left text-sm font-semibold text-highlight sm:pl-4">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-600">
                                {table.data.map((d) => (
                                    <tr key={d[0]}>
                                        {d.map((val, i) => i !== 0 ? (
                                            <td key={val} className="px-3 py-4 text-sm text-white">{val}</td>
                                        ) : (
                                            <td key={val} className={boldFirst ? 'py-4 pl-4 pr-3 text-sm font-bold text-white sm:pl-6' : 'px-3 pl-4 py-4 text-sm text-white'}>{val}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Table