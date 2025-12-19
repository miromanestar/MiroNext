import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "SAU Missions Dashboard",
    description:
      "A simple frontend UI for Southern Adventist University which displays information about current student missionaries.",
    href: "/projects/sau-missions",
    img: "https://picsum.photos/640",
  },
  {
    name: "Youtube Gallery",
    description:
      "A youtube gallery which grabs playlist data and displays it in a nice, response format with lightbox.",
    href: "/projects/youtube-gallery",
    img: "https://picsum.photos/640",
  },
  {
    name: "Illuminate Website",
    description: "A website built for the Illuminate team at Enactus",
    href: "/projects/illuminate",
    img: "https://picsum.photos/640",
  },
];

const FeaturedProjects = () => (
  <div className="relative z-40 -mt-[10%] flex flex-col justify-center gap-8 px-4 text-white md:flex-row">
    {projects.map((item, index) => (
      <Link href={item.href} key={`featured-${index}`}>
        <div className="hover: duration-200 hover:scale-[103%] hover:cursor-pointer md:max-w-75">
          <div className="group relative">
            <Image
              className="rounded-4xl shadow-lg"
              src={item.img}
              alt="Project image"
            />
            <div className="absolute top-0 left-0 z-10 h-full w-full translate-y-[10%] rounded-4xl bg-linear-to-b from-gray-900 to-transparent p-6 font-bold opacity-0 duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              {item.description}
            </div>
          </div>
          <h3 className="pt-4 text-3xl font-bold">{item.name}</h3>
        </div>
      </Link>
    ))}
  </div>
);

export default FeaturedProjects;
