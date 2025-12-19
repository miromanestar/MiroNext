import Image from "next/image";
import { Fade, Bounce } from "react-awesome-reveal";

const About = () => (
  <section className="bg-background relative max-w-full overflow-x-hidden">
    <div
      className="to-secondaryBg absolute bottom-0 z-10 h-[15%] w-full bg-linear-to-b from-transparent"
      aria-hidden="true"
    />

    <div className="mx-auto max-w-(--breakpoint-xl) items-center gap-8 py-8 lg:grid lg:grid-cols-2 lg:pb-16">
      <div className="px-4 font-light text-gray-300 sm:text-lg lg:px-0 lg:pl-8">
        <Bounce triggerOnce={true} direction="left">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="mb-4">
            I&apos;m a full-stack software engineer with a passion for creating
            beautiful, intuitive, and functional web applications. Whether it be
            a simple landing page or a complex web application, I take each as
            an opportunity to learn and grow.
          </p>
          <p>
            I love to challenge myself, and am always working on personal
            projects to hone my skills.
          </p>
        </Bounce>
      </div>
      <div className="relative z-20 mt-8 grid grid-cols-2 gap-4 px-4 lg:px-0 lg:pr-8">
        <Fade triggerOnce={true} direction="right" cascade={true}>
          <div className="flex h-full items-center">
            <Image
              className="w-full rounded-lg shadow-lg"
              src="https://i.imgur.com/0QGAjUX.jpeg"
              alt="office content 1"
              width={696}
              height={1280}
            />
          </div>
          <Image
            className="mt-4 h-[80%] w-full rounded-lg object-cover object-right shadow-lg lg:mt-10"
            src="https://i.imgur.com/UyGBwka.jpeg"
            alt="office content 2"
            width={760}
            height={506}
          />
        </Fade>
      </div>
    </div>
  </section>
);

export default About;
