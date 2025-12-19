import Link from "next/link";

const NotFound = () => {
  return (
    <div className="bg-secondaryBg flex h-full lg:relative">
      <div className="flex flex-1 grow flex-col">
        <main className="bg-secondaryBg flex h-full w-full items-center justify-center">
          <div className="my-auto shrink-0 py-16 sm:py-32">
            <p className="text-highlight text-base font-semibold">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-2 text-base text-gray-400">
              Sorry, I couldn&apos;t find the page you&apos;re looking for.
            </p>
            <div className="mt-6">
              <Link
                href="/"
                className="text-highlight text-base font-medium duration-200 hover:text-gray-200"
              >
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <div className="hidden flex-1 lg:relative lg:block">
        <img
          className="absolute h-full w-full object-cover"
          src="https://i.imgur.com/5j54gWF.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NotFound;
