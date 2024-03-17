import Link from "next/link"

const NotFound = () => {
    return (
        <div className="h-full flex bg-secondaryBg lg:relative">
            <div className="flex-1 flex flex-grow flex-col">
                <main className="flex items-center justify-center h-full w-full bg-secondaryBg">
                    <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                        <p className="text-base font-semibold text-highlight">404</p>
                        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                        <p className="mt-2 text-base text-gray-400">Sorry, I couldn&apos;t find the page you&apos;re looking for.</p>
                        <div className="mt-6">
                            <Link href="/" className="text-base font-medium duration-200 text-highlight hover:text-gray-200">
                                Go back home
                                <span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
            <div className="flex-1 hidden lg:relative lg:block">
                <img
                    className="absolute h-full w-full object-cover"
                    src="https://i.imgur.com/5j54gWF.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default NotFound