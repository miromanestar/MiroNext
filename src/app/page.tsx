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
    degree: "Computer Science",
    level: "MS & BS",
    website: "https://southern.edu",
    date: "August 2020 - May 2023",
    imageUrl:
      "https://www.thestudentloancalculator.com/wp-content/uploads/2020/08/mzi.gteaeddn-removebg-preview.png",
  },
  {
    institution: "University of North Georgia",
    degree: "Computer Science",
    level: "Associate of Science",
    website: "https://ung.edu",
    date: "August 2018 - May 2020",
    imageUrl: "https://i.imgur.com/FANSBxD.png",
  },
];

export default HomePage;
