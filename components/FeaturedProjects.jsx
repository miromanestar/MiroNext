import React from 'react'
import Link from 'next/link'

const projects = [
    {
        name: 'SAU Missions Dashboard',
        description: 'A simple frontend UI for Southern Adventist University which displays information about current student missionaries.',
        href: '/projects/sau-missions',
        img: 'https://picsum.photos/640'
    },
    {
        name: 'Youtube Gallery',
        description: 'A youtube gallery which grabs playlist data and displays it in a nice, response format with lightbox.',
        href: '/projects/youtube-gallery',
        img: 'https://picsum.photos/640'
    },
    {
        name: 'Illuminate Website',
        description: 'A website built for the Illuminate team at Enactus',
        href: '/projects/illuminate',
        img: 'https://picsum.photos/640'
    },
]

const FeaturedProjects = () => (
    <div className="relative px-4 flex flex-col gap-8 md:flex-row justify-center text-white -mt-[10%] z-40">
        { projects.map((item, index) => (
            <Link href={item.href} key={`featured-${index}`}>
                <div className="md:max-w-[300px] duration-200 hover:scale-[103%] hover:cursor-pointer hover:">
                    <div className="group relative">
                        <img className="rounded-[2rem] shadow-lg" src={item.img} />
                        <div className="translate-y-[10%] opacity-0 absolute top-0 font-bold left-0 w-full h-full rounded-[2rem] p-6 bg-gradient-to-b from-gray-900 to-transparent z-10 duration-200 group-hover:opacity-100 group-hover:translate-y-[0px]">
                            {item.description}
                        </div>
                    </div>
                    <h3 className="pt-4 font-bold text-3xl">{item.name}</h3>
                </div>
            </Link>
        ))}
    </div>
)

export default FeaturedProjects