import Link from 'next/link'
import Card from './Card'

const projects = [
    {
        name: 'SAU Missions Dashboard',
        description: 'A simple frontend UI for Southern Adventist University which displays information about current student missionaries.',
        href: '/projects/sau-missions',
        img: 'https://wallpaperaccess.com/full/221471.jpg',
        status: 'In Progress',
        time: '2021-08-01'
    },
    {
        name: 'Youtube Gallery',
        description: 'A youtube gallery which grabs playlist data and displays it in a nice, response format with lightbox.',
        href: '/projects/youtube-gallery',
        img: 'https://wallpaperaccess.com/full/221471.jpg',
        status: 'Complete',
        time: '2021-07-01'
    },
    {
        name: 'Illuminate Website',
        description: 'A website built for the Illuminate team at Enactus',
        href: '/projects/illuminate',
        img: 'https://wallpaperaccess.com/full/221471.jpg',
        status: 'Complete',
        time: '2021-06-01'
    },
]

const Cards = () => {
    return (
        <div className="relative">
            <div className="flex flex-col justify-center items-center gap-8 relative -mt-[250px] md:-mt-[300px] z-10 bg-transparent px-6 pt-16 pb-10 lg:px-8 lg:pt-24">
                <div className="relative mx-auto max-w-7xl">
                    <h2 className="text-center text-3xl font-bold text-white sm:text-4xl w-fit mx-auto p-3 rounded-lg drop-shadow-md">My Projects</h2>
                    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                        {projects.map((p, i) => (
                            <Card key={`fcard-${i}`} data={p} />
                        ))}
                    </div>
                </div>
                <Link
                    href="/projects"
                    className="bg-highlight text-white font-medium  cursor-pointer p-4 rounded-lg w-fit duration-200 hover:brightness-110 hover:scale-105"
                >
                    View all my projects
                </Link>
            </div>
        </div>
    )
}

export default Cards