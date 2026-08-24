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
    <div className="mx-auto max-w-5xl text-center">
      <h2 className="text-highlight text-center text-base leading-7 font-semibold">
        Automated attendance tracking via facial recognition
      </h2>
      <p className="mt-2 mb-2 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
        AutoAttend
      </p>
      <a
        href="https://github.com/miromanestar/AutoAttend"
        className="hover:border-highlight/40 hover:text-highlight mx-auto inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/4 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur-sm transition duration-200 hover:bg-white/7"
      >
        <img src="/images/github.svg" className="white-filter mr-2 h-[20px]" />
        View Source
      </a>
      <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-gray-300">
        A proof-of-concept application levaraging open source face vectorization
        models and vector databases to perform automated classroom attendance
        tracking via facial recognition. It uses a host of open source
        technologies, all connected together to create an application that can
        be used to track attendance in a classroom setting.
      </p>
    </div>
    <div className="pt-10 sm:pt-14">
      <img
        src="https://i.imgur.com/c82PxpH.png"
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

export default AutoAttend;
