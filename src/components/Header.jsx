"use client";

import React, { useState, Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ViewfinderCircleIcon,
  LightBulbIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    name: "Hawaii and Southern California Geochemistry",
    description:
      "A research project comparing the geochemistry of the Hawaiian Islands and Southern California",
    href: "/projects/hawaii",
    icon: LightBulbIcon,
  },
  {
    name: "SAU Missions Dashboard",
    description:
      "A simple frontend UI for Southern Adventist University which displays information about current student missionaries.",
    href: "/projects/missions",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "AutoAttend",
    description:
      "A proof-of-concept application for automating attendance in a classroom setting via facial recognition.",
    href: "/projects/autoattend",
    icon: ViewfinderCircleIcon,
  },
];

const social = [
  {
    url: "https://github.com/miromanestar",
    img: "/images/github.svg",
  },
  {
    url: "https://twitter.com/ManestarMiro",
    img: "/images/twitter.svg",
  },
  {
    url: "https://www.linkedin.com/in/miro-manestar/",
    img: "/images/linkedin.svg",
  },
  {
    url: "mailto:miroimanestar@gmail.com",
    img: "/images/email.svg",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Links = ({ close }) => (
  <>
    <Link
      onClick={close}
      href="/"
      className="text-base font-medium text-white hover:text-gray-100 focus:outline-hidden"
    >
      Home
    </Link>
  </>
);

const ProjectLinks = ({ close }) => (
  <>
    <div className="bg-secondaryBg relative grid gap-6 px-5 py-6 focus:outline-hidden sm:gap-8 sm:p-8">
      {projects.map((item) => (
        <Link
          key={item.name}
          onClick={close}
          href={item.href}
          className="hover:bg-background -m-3 flex items-start rounded-lg p-3 duration-200"
        >
          <item.icon
            className="text-highlight h-6 w-6 shrink-0"
            aria-hidden="true"
          />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-100">{item.name}</p>
            <p className="mt-1 text-sm text-white">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
    <div className="bg-tertiaryBg rounded-b-lg px-5 py-5 focus:outline-hidden sm:px-8">
      <div className="text-sm">
        <Link
          onClick={close}
          href="/projects"
          className="text-highlight font-medium duration-200 hover:brightness-75"
        >
          View all projects
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </div>
  </>
);

const SocialLinks = () => (
  <div className="flex justify-center gap-4">
    {social.map((item) => (
      <Link
        key={item.url}
        href={item.url}
        className="text-gray-400 duration-200 hover:scale-105 hover:text-white"
      >
        <img className="white-filter h-[3em]" src={item.img} alt={item.url} />
      </Link>
    ))}
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover className="fixed z-50 w-full">
      {({ close: closeOuter }) => (
        <>
          <div className="sticky mx-auto max-w-7xl px-4 sm:px-6">
            <div className="bg-tertiaryBg/10 mt-3 flex items-center justify-between rounded-lg px-4 py-2 shadow-sm outline-1 outline-gray-300/10 drop-shadow-md backdrop-blur-sm md:space-x-10 md:p-3">
              <div className="flex items-center gap-6">
                <div className="flex justify-start">
                  <Link href="/">
                    <span className="sr-only">Miro Manestar</span>
                    <img
                      className="white-filter h-[3em]"
                      src="/logo.svg"
                      alt=""
                    />
                  </Link>
                </div>

                <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                  <Link
                    href="/"
                    className="text-base font-medium text-white hover:text-gray-100"
                  >
                    Home
                  </Link>

                  <Popover
                    className="relative"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    {({ open, close }) => (
                      <>
                        <Link
                          className={classNames(
                            open ? "text-gray-100" : "text-white",
                            "group inline-flex items-center rounded-md text-base font-medium hover:text-gray-100 focus:outline-hidden",
                          )}
                          href="/projects"
                        >
                          <span>Projects</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-100" : "text-gray-200",
                              "ml-2 h-5 w-5 group-hover:text-white",
                            )}
                            aria-hidden="true"
                          />
                        </Link>

                        <Transition
                          as={Fragment}
                          show={isOpen}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute top-0 left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 transform px-2 pt-8 sm:px-0">
                            <div className="ring-opacity-5 overflow-hidden rounded-lg shadow-lg ring-1 ring-black">
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
                <Popover.Button className="inline-flex items-center justify-center rounded-md border-2 border-white/30 bg-gray-800/10 p-2 text-gray-200 shadow-md drop-shadow-lg select-none hover:text-white focus:outline-hidden">
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
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-[80px] origin-top-right transform p-2 transition md:hidden"
            >
              <div className="bg-secondaryBg ring-opacity-5 divide-y divide-gray-500 rounded-lg shadow-lg ring-1 ring-black">
                <div className="space-y-6 px-5 py-6">
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
  );
};

export default Header;
