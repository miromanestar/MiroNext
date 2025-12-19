import {
  QueueListIcon,
  CursorArrowRippleIcon,
  CubeIcon,
  CloudIcon,
  CircleStackIcon,
  TableCellsIcon,
} from "@heroicons/react/20/solid";

import Template from "@/components/Template";

const features = [
  {
    name: "React.",
    description:
      "Built with React, a JavaScript library for building user interfaces.",
    icon: QueueListIcon,
  },
  {
    name: "Electron.",
    description:
      "Electron is a framework for building desktop applications with web technologies.",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "Milvus.",
    description:
      "Milvus is an open-source vector database powered by Faiss, an open-source library for efficient similarity search and clustering of dense vectors.",
    icon: CloudIcon,
  },
  {
    name: "Docker.",
    description:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
    icon: CubeIcon,
  },
  {
    name: "Tensorflow.",
    description:
      "Tensorflow is an end-to-end open source platform for machine learning.",
    icon: CircleStackIcon,
  },
  {
    name: "Supabase.",
    description: "Supabase is an open source Firebase alternative.",
    icon: TableCellsIcon,
  },
];

const AutoAttend = () => (
  <Template title="AutoAttend" names={["", "AutoAttend"]}>
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="mx-auto max-w-5xl sm:text-center">
        <h2 className="text-highlight text-center text-base leading-7 font-semibold">
          Automated attendance tracking via facial recognition
        </h2>
        <p className="mt-2 mb-2 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AutoAttend
        </p>
        <a
          href="https://github.com/miromanestar/AutoAttend"
          className="text-md hover:text-highlight flex items-center justify-center leading-7 text-gray-400 duration-200"
        >
          <img
            src="/images/github.svg"
            className="white-filter mr-2 h-[20px]"
          />
          View Source
        </a>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A proof-of-concept application levaraging open source face
          vectorization models and vector databases to perform automated
          classroom attendance tracking via facial recognition. It uses a host
          of open source technologies, all connected together to create an
          application that can be used to track attendance in a classroom
          setting.
        </p>
      </div>
    </div>
    <div className="relative pt-16">
      <div className="mx-auto max-w-7xl lg:px-8">
        <img
          src="https://i.imgur.com/c82PxpH.png"
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
              <feature.icon
                className="text-highlight absolute top-1 left-1 h-5 w-5"
                aria-hidden="true"
              />
              {feature.name}
            </dt>{" "}
            <dd className="inline">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </Template>
);

export default AutoAttend;
