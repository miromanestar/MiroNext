import Image from "next/image";
import { Fade, Bounce } from "react-awesome-reveal";

const About = ({ profile }) => (
  <section className="bg-background relative max-w-full overflow-x-hidden">
    <div
      className="to-secondaryBg absolute bottom-0 z-10 h-[15%] w-full bg-linear-to-b from-transparent"
      aria-hidden="true"
    />

    <div className="mx-auto max-w-(--breakpoint-xl) items-center gap-8 py-8 lg:grid lg:grid-cols-2 lg:pb-16">
      <div className="px-4 font-light text-gray-300 sm:text-lg lg:px-0 lg:pl-8">
        <Bounce triggerOnce={true} direction="left">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          {profile.about.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? "mb-4" : undefined}>
              {paragraph}
            </p>
          ))}
        </Bounce>
      </div>
      <div className="relative z-20 mt-8 grid grid-cols-2 gap-4 px-4 lg:px-0 lg:pr-8">
        <Fade triggerOnce={true} direction="right" cascade={true}>
          <div className="flex h-full items-center">
            <Image
              className="w-full rounded-lg shadow-lg"
              src={profile.images.portrait.src}
              alt={profile.images.portrait.alt}
              width={profile.images.portrait.width}
              height={profile.images.portrait.height}
            />
          </div>
          <Image
            className="mt-4 h-[80%] w-full rounded-lg object-cover object-right shadow-lg lg:mt-10"
            src={profile.images.technology.src}
            alt={profile.images.technology.alt}
            width={profile.images.technology.width}
            height={profile.images.technology.height}
          />
        </Fade>
      </div>
    </div>
  </section>
);

export default About;
