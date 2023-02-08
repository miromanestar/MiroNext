import Container from "../components/Container"

const NotFound = () => {
    return (
        <div className="h-full flex flex-col bg-secondaryBg lg:relative">
            <div className="flex flex-grow flex-col">
                <main className="flex flex-grow flex-col bg-secondaryBg">
                    <Container>
                        <div className="h-full flex flex-grow flex-col px-6 lg:px-8">
                            <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                                <p className="text-base font-semibold text-highlight">404</p>
                                <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                                <p className="mt-2 text-base text-gray-400">Sorry, I couldn&apos;t find the page you&apos;re looking for.</p>
                                <div className="mt-6">
                                    <a href="#" className="text-base font-medium duration-200 text-highlight hover:text-gray-200">
                                        Go back home
                                        <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </main>
            </div>
            <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
                <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://i.imgur.com/5j54gWF.png"
                    alt=""
                />
            </div>
        </div>
    )
}

export default NotFound