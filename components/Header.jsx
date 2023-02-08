import React, { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    LightBulbIcon,
    SquaresPlusIcon,
    XMarkIcon,
    GlobeEuropeAfricaIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const projects = [
    {
        name: 'SAU Missions Dashboard',
        description: 'A simple frontend UI for Southern Adventist University which displays information about current student missionaries.',
        href: 'https://missions.miromanestar.com',
        icon: GlobeEuropeAfricaIcon,
    },
    {
        name: 'Youtube Gallery',
        description: 'A youtube gallery which grabs playlist data and displays it in a nice, response format with lightbox.',
        href: 'https://miromanestar.github.io/Youtube-Gallery/',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Illuminate Website',
        description: 'A website built for the Illuminate team at Enactus',
        href: 'https://illuminatesau.com',
        icon: LightBulbIcon,
    },
]

const social = [
    {
        url: 'https://github.com/miromanestar',
        img: '/images/github.svg',
    },
    {
        url: 'https://twitter.com/ManestarMiro',
        img: '/images/twitter.svg',
    },
    {
        url: 'https://www.linkedin.com/in/miro-manestar/',
        img: '/images/linkedin.svg',
    },
    {
        url: 'mailto:miroimanestar@gmail.com',
        img: '/images/email.svg',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Links = ({ close }) => (
    <>
        <Link onClick={close} href="/" className="text-base font-medium text-white hover:text-gray-100">
            Home
        </Link>
    </>
)

const ProjectLinks = ({ close }) => (
    <>
        <div className="relative grid gap-6 bg-secondaryBg px-5 py-6 sm:gap-8 sm:p-8 focus:outline-none">
            {projects.map((item) => (
                <Link
                    key={item.name}
                    onClick={close}
                    href={item.href}
                    className="-m-3 flex items-start rounded-lg p-3 duration-200 hover:bg-background"
                >
                    <item.icon className="h-6 w-6 flex-shrink-0 text-highlight" aria-hidden="true" />
                    <div className="ml-4">
                        <p className="text-base font-medium text-gray-100">{item.name}</p>
                        <p className="mt-1 text-sm text-white">{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
        <div className="bg-tertiaryBg rounded-b-lg px-5 py-5 sm:px-8 focus:outline-none">
            <div className="text-sm">
                <Link onClick={close} href="/projects" className="font-medium duration-200 text-highlight hover:brightness-75">
                    View all projects
                    <span aria-hidden="true"> &rarr;</span>
                </Link>
            </div>
        </div>
    </>
)

const SocialLinks = () => (
    <div className="flex gap-4 justify-center">
        {social.map((item) => (
            <Link key={item.url} href={item.url} className="text-gray-400 hover:text-white duration-200 hover:scale-105">
                <img className="h-[3em] white-filter" src={item.img} alt={item.url} />
            </Link>
        ))}
    </div>
)

const Header = () => (
    <Popover className="fixed z-50 w-full">
        {({ close: closeOuter }) => (
            <>
                <div className="sticky mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex items-center px-4 bg-tertiaryBg/10 drop-shadow-md py-2  mt-3 backdrop-blur justify-between rounded-lg md:p-3 md:space-x-10">

                        <div className="flex items-center gap-6">
                            <div className="flex justify-start">
                                <Link href="/">
                                    <span className="sr-only">Miro Manestar</span>
                                    <img
                                        className="h-[3em] white-filter"
                                        src="/logo.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>

                            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                                <Link href="/" className="text-base font-medium text-white hover:text-gray-100">
                                    Home
                                </Link>

                                <Popover className="relative">
                                    {({ open, close }) => (
                                        <>
                                            <Popover.Button
                                                className={classNames(
                                                    open ? 'text-gray-100' : 'text-white',
                                                    'group inline-flex items-center rounded-md text-base font-medium hover:text-gray-100 focus:outline-none'
                                                )}
                                            >
                                                <span>Projects</span>
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open ? 'text-gray-100' : 'text-gray-200',
                                                        'ml-2 h-5 w-5 group-hover:text-white'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Popover.Button>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute left-1/2 z-10 mt-3 top-10 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                        <ProjectLinks close={close} />
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>
                            </Popover.Group>
                        </div>

                        <div className="hidden md:block">
                            <SocialLinks />
                        </div>

                        <div className="-my-2 -mr-2 md:hidden">
                            <Popover.Button className="inline-flex items-center justify-center rounded-md drop-shadow-lg shadow-md bg-gray-800/10 border-2 border-white/30 p-2 text-gray-200 hover:text-white focus:outline-none select-none">
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus className="absolute inset-x-0 top-[80px] origin-top-right transform p-2 transition md:hidden">
                        <div className="divide-y-[1px] divide-gray-500 rounded-lg bg-secondaryBg shadow-lg ring-1 ring-black ring-opacity-5">
                            {/* <div className="px-5 pt-5 pb-6">
                                <div className="flex items-center justify-between">
                                    <Link onClick={closeOuter} href="/">
                                        <img
                                            className="h-[3em] w-auto white-filter"
                                            src="/logo.svg"
                                            alt="Miro Manestar"
                                        />
                                    </Link>
                                    <div className="-mr-2">
                                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-secondaryBg p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div> */}
                            <div className="space-y-6 py-6 px-5">
                                <div className="flex flex-row flex-wrap justify-around">
                                    <Links close={closeOuter} />
                                </div>
                                <SocialLinks />
                            </div>
                            <ProjectLinks close={closeOuter} />
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
        )}
    </Popover>
)

export default Header