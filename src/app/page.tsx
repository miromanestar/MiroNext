import type { Metadata, Viewport } from "next";

import {
  experience,
  featuredProjects,
  institutions,
  profile,
} from "../data/portfolio";
import About from "../components/About";
import Cards from "../components/Cards";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Institutions from "../components/Institutions";

export const metadata: Metadata = {
  title: profile.siteTitle,
  description: profile.description,
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Cards className="-mt-75" cards={featuredProjects} />
      <About profile={profile} />

      <div className="bg-secondaryBg">
        <Experience positions={experience} />
        <Institutions institutions={institutions} />
      </div>
    </div>
  );
};

export default HomePage;
