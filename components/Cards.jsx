import Card from './Card'

const projects = [
    {
        name: 'SAU Missions Dashboard',
        description: 'A simple frontend UI for Southern Adventist University which displays information about current student missionaries.',
        href: '/projects/sau-missions',
        img: 'https://picsum.photos/640',
        status: 'In Progress',
        time: '2021-08-01'
    },
    {
        name: 'Youtube Gallery',
        description: 'A youtube gallery which grabs playlist data and displays it in a nice, response format with lightbox.',
        href: '/projects/youtube-gallery',
        img: 'https://picsum.photos/640',
        status: 'Complete',
        time: '2021-07-01'
    },
    {
        name: 'Illuminate Website',
        description: 'A website built for the Illuminate team at Enactus',
        href: '/projects/illuminate',
        img: 'https://picsum.photos/640',
        status: 'Complete',
        time: '2021-06-01'
    },
]

const Cards = () => {
    return (
        <div className="relative">
            <div className="flex flex-col justify-center items-center gap-8 relative -mt-[20%] z-10 bg-transparent px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
                <div className="relative mx-auto max-w-7xl">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">My Projects</h2>
                    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                        {projects.map((p, i) => (
                            <Card key={`fcard-${i}`} data={p} />
                        ))}
                    </div>
                </div>
                <div
                    type="button"
                    className="bg-highlight text-white font-medium  cursor-pointer p-4 rounded-lg w-fit duration-200 hover:brightness-110 hover:scale-105"
                >
                    View all my projects
                </div>
            </div>
            <div className="z-10 absolute h-[15%] w-full bottom-0 bg-gradient-to-b from-transparent to-secondaryBg" aria-hidden="true" />
        </div>
    )
}

export default Cards