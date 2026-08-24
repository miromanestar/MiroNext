import type { Metadata } from "next";

import {
  education,
  experience,
  featuredProjects,
  profile,
  socialLinks,
} from "../data/portfolio";
import About from "../components/About";
import Career from "../components/Career";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HomeGradient from "../components/HomeGradient";

export const metadata: Metadata = {
  title: profile.siteTitle,
  description: profile.description,
};


const HomePage = () => {
  const githubHref = socialLinks.find((link) => link.name === "GitHub")?.href;
  const emailHref = socialLinks.find((link) => link.name === "Email")?.href;
  const linkedinHref = socialLinks.find(
    (link) => link.name === "LinkedIn",
  )?.href;

  return (
    <main className="relative">
      <HomeGradient />
      <Hero profile={profile} githubHref={githubHref} />
      <Cards cards={featuredProjects} />
      <About profile={profile} />
      <Career positions={experience} education={education} />
      <Contact emailHref={emailHref} linkedinHref={linkedinHref} />
    </main>
  );
};

export default HomePage;
