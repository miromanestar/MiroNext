const Card = ({ data }) => (
    <div className="group h-full flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <div className="flex-shrink-0">
            <img className="h-48 w-full object-cover duration-200 group-hover:scale-105" src={data.img} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between duration-200 bg-tertiaryBg group-hover:bg-secondaryBg group-hover:scale-[1.02] p-6">
            <div className="flex-1">
                <p className="text-sm font-medium text-highlight">
                    <a href={data.href} className="hover:underline">
                        {data.category}
                    </a>
                </p>
                <a href={data.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-white">{data.name}</p>
                    <p className="mt-3 text-base text-white">{data.description}</p>
                </a>
            </div>
            <div className="mt-6 flex items-center select-none">
                <div className="flex-shrink-0">
                    <a href={data.url}>
                        <span className="sr-only">hmm</span>
                        <img className="h-10 w-10 rounded-full white-filter" src="/images/github.svg" alt="" />
                    </a>
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-gray-300">
                        <a href={data.url} className="hover:underline">
                            Status
                        </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-400">
                        <span>{data.status}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Card