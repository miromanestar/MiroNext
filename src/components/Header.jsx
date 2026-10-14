"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  GlobeEuropeAfricaIcon,
  LightBulbIcon,
  Squares2X2Icon,
  ViewfinderCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { featuredProjects, socialLinks } from "../data/portfolio";

const projectIcons = {
  research: LightBulbIcon,
  missions: GlobeEuropeAfricaIcon,
  attendance: ViewfinderCircleIcon,
};

const glassSurface =
  "border border-white/15 shadow-[0_8px_30px_rgba(15,23,42,0.18)]";

const glassStyle = {
  backgroundColor: "rgba(67, 76, 94, 0.22)",
  backdropFilter: "blur(28px) saturate(140%)",
  WebkitBackdropFilter: "blur(28px) saturate(140%)",
};

const popoverGlassStyle = {
  ...glassStyle,
  backgroundColor: "rgba(46, 52, 64, 0.42)",
};

const expandedMobileGlassStyle = {
  ...glassStyle,
  backgroundColor: "transparent",
  backgroundImage: `linear-gradient(to bottom, ${glassStyle.backgroundColor} 32px, ${popoverGlassStyle.backgroundColor} 128px)`,
};

const ProjectLinks = ({ onNavigate }) => (
  <div className="space-y-1 p-2">
    {featuredProjects.map((project) => {
      const Icon = projectIcons[project.navigationIcon] ?? Squares2X2Icon;

      return (
        <Link
          key={project.href}
          href={project.href}
          onClick={onNavigate}
          data-project-link
          className="group flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/10"
        >
          <span className="bg-background/50 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white shadow-sm">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-white drop-shadow-sm">
              {project.name}
            </span>
            <span className="mt-0.5 block text-xs font-medium text-gray-200">
              {project.category}
            </span>
          </span>
        </Link>
      );
    })}
  </div>
);

const SocialLinks = ({ className = "" }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    {socialLinks.map((item) => {
      const external = item.href.startsWith("http");

      return (
        <a
          key={item.name}
          href={item.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-xl opacity-80 transition hover:bg-white/10 hover:opacity-100 md:h-12 md:w-12"
        >
          <span className="sr-only">{item.name}</span>
          <Image
            className="white-filter h-10 w-10 md:h-8 md:w-8"
            src={item.image}
            alt=""
            width={40}
            height={40}
            aria-hidden="true"
          />
        </a>
      );
    })}
  </div>
);

const DesktopProjects = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") close();
      }}
    >
      <div className="flex items-center rounded-xl transition hover:bg-white/10">
        <Link
          href="/projects"
          className="cursor-pointer py-2.5 pr-1 pl-3 text-base font-medium text-white drop-shadow-sm"
        >
          Projects
        </Link>
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="cursor-pointer rounded-r-xl py-3 pr-3 pl-1 text-gray-200 hover:text-white focus:outline-none"
          aria-expanded={open}
          aria-label="Toggle featured projects"
        >
          <ChevronDownIcon
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <Transition show={open}>
        <div className="header-menu-content absolute top-full -left-3 w-84 pt-3.5 transition-[opacity,translate] duration-150 ease-out data-closed:-translate-y-1 data-closed:opacity-0 motion-reduce:transition-none">
          <div
            className={`rounded-b-2xl border-t-0 ${glassSurface}`}
            style={popoverGlassStyle}
          >
            <ProjectLinks onNavigate={close} />
          </div>
        </div>
      </Transition>
    </div>
  );
};

const Header = () => (
  <Popover as="header" className="fixed inset-x-0 top-0 z-50 px-3 sm:px-5">
    {({ open, close: closeMobile }) => (
      <div className="relative mx-auto mt-3 max-w-[88rem]">
        <span
          className={`pointer-events-none absolute inset-0 rounded-2xl md:hidden ${glassSurface}`}
          style={open ? expandedMobileGlassStyle : glassStyle}
          aria-hidden="true"
        />
        <div className="relative flex h-18 items-center justify-between rounded-2xl px-4 sm:px-5">
          <span
            className={`pointer-events-none absolute inset-0 hidden rounded-2xl md:block ${glassSurface}`}
            style={glassStyle}
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center gap-7">
            <Link
              href="/"
              onClick={closeMobile}
              className="flex cursor-pointer items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="sr-only">Miro Manestar</span>
              <Image
                className="white-filter h-11 w-11"
                src="/logo.svg"
                alt=""
                width={44}
                height={44}
                priority
                aria-hidden="true"
              />
            </Link>

            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Main navigation"
            >
              <Link
                href="/"
                className="cursor-pointer rounded-xl px-3 py-2.5 text-base font-medium text-white drop-shadow-sm transition hover:bg-white/10"
              >
                Home
              </Link>
              <DesktopProjects />
            </nav>
          </div>

          <div className="relative z-10 flex items-center gap-2">
            <SocialLinks className="hidden md:flex" />
            <PopoverButton className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-gray-100 transition hover:bg-white/10 hover:text-white focus:outline-none md:hidden">
              <span className="sr-only">
                {open ? "Close navigation" : "Open navigation"}
              </span>
              <Bars3Icon
                className={`absolute h-7 w-7 transition-[opacity,rotate] duration-150 ease-out motion-reduce:transition-none ${open ? "rotate-45 opacity-0" : "rotate-0 opacity-100"}`}
                aria-hidden="true"
              />
              <XMarkIcon
                className={`absolute h-7 w-7 transition-[opacity,rotate] duration-150 ease-out motion-reduce:transition-none ${open ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"}`}
                aria-hidden="true"
              />
            </PopoverButton>
          </div>
        </div>

        <PopoverPanel
          transition
          className="header-menu-content relative grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-150 ease-out data-closed:grid-rows-[0fr] data-closed:opacity-0 motion-reduce:transition-none md:hidden"
        >
          <div className="min-h-0 overflow-hidden">
            <div className="p-2">
              <nav aria-label="Mobile navigation">
                <Link
                  href="/"
                  onClick={closeMobile}
                  className="block cursor-pointer rounded-xl px-3 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  onClick={closeMobile}
                  className="block cursor-pointer rounded-xl px-3 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Projects
                </Link>
                <div className="mt-1 border-t border-white/10 pt-2">
                  <p className="px-3 pb-1 text-sm font-medium text-gray-300">
                    Featured projects
                  </p>
                  <ProjectLinks onNavigate={closeMobile} />
                </div>
              </nav>
              <SocialLinks className="mt-1 justify-center pt-2" />
            </div>
          </div>
        </PopoverPanel>
      </div>
    )}
  </Popover>
);

export default Header;
