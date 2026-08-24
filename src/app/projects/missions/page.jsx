import React from "react";
import {
  QueueListIcon,
  CursorArrowRippleIcon,
  CubeIcon,
  CloudIcon,
  CircleStackIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";

import Template from "../../../components/Template";

const features = [
  {
    name: "React.",
    description:
      "Built with React, a JavaScript library for building user interfaces.",
    icon: QueueListIcon,
  },
  {
    name: "Tauri.",
    description:
      "Tauri is a framework for building desktop applications with web technologies.",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "Strapi.",
    description:
      "Strapi is an open-source headless CMS that allows for easy content management.",
    icon: CloudIcon,
  },
  {
    name: "Docker.",
    description:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
    icon: CubeIcon,
  },
  {
    name: "Nginx.",
    description:
      "Nginx is a web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.",
    icon: CircleStackIcon,
  },
  {
    name: "MySQL.",
    description:
      "MySQL is an open-source relational database management system.",
    icon: TableCellsIcon,
  },
];

const Missions = () => (
  <Template title="SAU Missions Dashboard">
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-highlight text-center text-base leading-7 font-semibold">
        Built with React, Tauri and Strapi
      </h2>
      <p className="mt-2 mb-2 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        SAU Missions Dashboard
      </p>
      <a
        href="https://saukiosk.manestar.dev"
        className="hover:border-highlight/40 hover:text-highlight mx-auto inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm transition duration-200 hover:bg-white/7"
      >
        View Demo
      </a>
      <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-gray-300">
        The SAU Missions Dashboard is a simple website built for a large
        touchscreen kiosk. It allows users to easily see information relating to
        missions opportunities at Southern Adventist University, including
        current student missionaries, SAU&apos;s presence around the globe, and
        opportunities currently available for students here.
      </p>
    </div>
    <div className="pt-10 sm:pt-14">
      <img
        src="https://i.imgur.com/bOpGpn9.jpg"
        alt="App screenshot"
        className="w-full rounded-2xl border border-white/10 bg-white/3 p-1 shadow-sm"
      />
    </div>
    <div className="mt-10 sm:mt-14">
      <dl className="grid grid-cols-1 gap-3 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="rounded-xl border border-white/10 bg-white/4 p-4 backdrop-blur-sm"
          >
            <dt className="flex items-center gap-2 font-semibold text-white">
              <feature.icon
                className="text-highlight h-5 w-5 shrink-0"
                aria-hidden="true"
              />
              {feature.name}
            </dt>
            <dd className="mt-2">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </Template>
);

export default Missions;
