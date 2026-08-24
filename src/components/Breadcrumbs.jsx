"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HomeIcon } from "@heroicons/react/20/solid";

const Breadcrumbs = ({ names = [] }) => {
  const path = usePathname();

  const calcPath = () => {
    const pathArr = path.split("/").slice(1);

    return pathArr.map((p, i) => ({
      name: names[i] || p.charAt(0).toUpperCase() + p.slice(1),
      href: `/${pathArr.slice(0, i + 1).join("/")}`,
    }));
  };

  const routes = calcPath();

  return (
    <nav
      className="mt-4 overflow-x-auto px-4 sm:mt-6 sm:px-6 lg:px-8"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="mx-auto flex w-full max-w-7xl items-center gap-2 whitespace-nowrap sm:gap-4"
      >
        <li>
          <div>
            <Link
              href="/"
              className="hover:text-highlight text-gray-400 duration-100"
            >
              <HomeIcon
                className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                aria-hidden="true"
              />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {routes.map((r) => (
          <li key={r.name}>
            <div className="flex items-center">
              <svg
                className="h-4 w-4 shrink-0 text-gray-500 sm:h-5 sm:w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>
              <Link
                href={r.href}
                className="hover:text-highlight ml-2 text-xs font-medium text-gray-300 duration-100 sm:ml-4 sm:text-sm"
              >
                {r.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
