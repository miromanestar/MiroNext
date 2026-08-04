import type { Metadata, Viewport } from "next";

import data from "../data/data.json";
import About from "../components/About";
import Cards from "../components/Cards";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Institutions from "../components/Institutions";

export const metadata: Metadata = {
  title: "Miro's Portfolio",
  description:
    "Hello, and welcome to my portfolio! I'm a full-stack software engineer with a passion for creating beautiful, intuitive, and functional web applications.",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Cards className="-mt-75" cards={data.projects.slice(0, 3)} />
      <About />

      <div className="bg-secondaryBg">
        <Experience />
        <Institutions institutions={schools} />
      </div>
    </div>
  );
};

const schools = [
  {
    institution: "Southern Adventist University",
    degree: "M.S. Computer Science",
    // level: "Master of Science",
    website: "https://southern.edu",
    date: "August 2021 - May 2023",
  },
  {
    institution: "Southern Adventist University",
    degree: "B.S. Computer Science",
    // level: "Bachelor of Science",
    website: "https://southern.edu",
    date: "August 2020 - May 2023",
  },
];

export default HomePage;
