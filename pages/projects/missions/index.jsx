import React from 'react'
import {
    QueueListIcon,
    CursorArrowRippleIcon,
    CubeIcon,
    CloudIcon,
    CircleStackIcon,
    TableCellsIcon
} from '@heroicons/react/20/solid'

import Template from '../../../components/Template'

const features = [
    {
        name: 'React.',
        description: 'Built with React, a JavaScript library for building user interfaces.',
        icon: QueueListIcon
    },
    {
        name: 'Tauri.',
        description: 'Tauri is a framework for building desktop applications with web technologies.',
        icon: CursorArrowRippleIcon
    },
    {
        name: 'Strapi.',
        description: 'Strapi is an open-source headless CMS that allows for easy content management.',
        icon: CloudIcon
    },
    {
        name: 'Docker.',
        description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
        icon: CubeIcon
    },
    {
        name: 'Nginx.',
        description: 'Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
        icon: CircleStackIcon
    },
    {
        name: 'MySQL.',
        description: 'MySQL is an open-source relational database management system.',
        icon: TableCellsIcon
    }
]

const Missions = () => (
    <Template title="SAU Missions Dashboard">
        <div className="mx-auto max-w-7xl lg:px-8">
            <div className="mx-auto max-w-5xl">
                <h2 className="text-base font-semibold leading-7 text-highlight text-center">Built with React, Tauri and Strapi</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">SAU Missions Dashboard</p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    The SAU Missions Dashboard is a simple website built for a large touchscreen kiosk.
                    It allows users to easily see information relating to missions opportunities at Southern Adventist University,
                    including current student missionaries, SAU&apos;s presence around the globe, and opportunities
                    currently available for students here.
                </p>
            </div>
        </div>
        <div className="relative pt-16">
            <div className="mx-auto max-w-7xl lg:px-8">
                <img
                    src="https://i.imgur.com/bOpGpn9.jpg"
                    alt="App screenshot"
                    className="rounded-xl shadow-2xl ring-2 ring-white/10"
                />
            </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-white">
                            <feature.icon className="absolute top-1 left-1 h-5 w-5 text-highlight" aria-hidden="true" />
                            {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </Template>
)

export default Missions