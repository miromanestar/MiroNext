export type ProjectIcon = "research" | "missions" | "attendance";

export interface Project {
  name: string;
  href: string;
  source?: string;
  description: string;
  image: string;
  status: string;
  category: string;
  featured?: boolean;
  navigationIcon?: ProjectIcon;
}

export interface Experience {
  title: string;
  type: string;
  company: string;
  location: string;
  start: string;
  end?: string;
  startLabel: string;
  endLabel: string;
}

export interface Institution {
  institution: string;
  degree: string;
  level: string;
  website: string;
  date: string;
}

export interface SocialLink {
  name: string;
  href: string;
  image: string;
}

export const profile = {
  name: "Miro Manestar",
  siteTitle: "Miro's Portfolio",
  description:
    "Hello, and welcome to my portfolio! I'm a full-stack software engineer with a passion for creating beautiful, intuitive, and functional web applications.",
  about: [
    "I'm a full-stack software engineer with a passion for creating beautiful, intuitive, and robust applications. Whether it be a simple landing page or a complex application, I take each as an opportunity to learn and grow.",
    "I love to challenge myself, and am always working on personal projects to hone my skills.",
  ],
  images: {
    portrait: {
      src: "https://i.imgur.com/zmpb9Fx.jpeg",
      alt: "Miro Manestar",
      width: 708,
      height: 957,
    },
    technology: {
      src: "https://i.imgur.com/UyGBwka.jpeg",
      alt: "Tech image",
      width: 760,
      height: 506,
    },
  },
} as const;

export const projects: Project[] = [
  {
    name: "Hawaii and Southern California Geochemical Comparison",
    href: "/projects/hawaii",
    source: "https://github.com/miromanestar/LomaGeology",
    description:
      "A research project comparing the geochemistry of the Hawaiian Islands and Southern California. Done in collaboration with the Geoscience Research Institute and Southern Adventist University.",
    image: "https://i.imgur.com/dcXTVGm.jpg",
    status: "Complete",
    category: "Research",
    featured: true,
    navigationIcon: "research",
  },
  {
    name: "SAU Missions Dashboard",
    href: "/projects/missions",
    description:
      "A simple frontend UI for Southern Adventist University which displays information about current student missionaries.",
    image: "https://i.imgur.com/MPHVBNT.jpg",
    status: "Complete",
    category: "Full Stack Application",
    featured: true,
    navigationIcon: "missions",
  },
  {
    name: "AutoAttend",
    href: "/projects/autoattend",
    source: "https://github.com/miromanestar/AutoAttend",
    description:
      "A proof-of-concept application leveraging open source face vectorization models and vector databases to perform automated classroom attendance tracking via facial recognition.",
    image: "https://i.imgur.com/SeLhb3b.jpg",
    status: "Complete",
    category: "Full Stack Application",
    featured: true,
    navigationIcon: "attendance",
  },
  {
    name: "Snake in Rust",
    href: "/projects/snake",
    description: "A very simple snake game built in Rust and compiled for WASM",
    image: "https://i.imgur.com/yXQByXt.jpeg",
    status: "Complete",
    category: "Game",
  },
  {
    name: "Constraint Based Programming",
    href: "https://constraints.miromanestar.com/",
    description:
      "A simple visualizer for constraint based programming. Done in Javascript!",
    image: "https://i.imgur.com/lMiMbdF.jpg",
    status: "Complete",
    category: "Visualizer",
  },
  {
    name: "Segmentation Simulator",
    href: "https://sim.miromanestar.com/",
    description:
      "A memory segmentation and virtual address translation visualizer.",
    image: "https://i.imgur.com/rT88WGi.jpg",
    status: "Complete",
    category: "Visualizer",
  },
  {
    name: "RayCalc",
    href: "/projects/raycalc",
    description:
      "A cross-platform radiation dosimetry app build for emergency situations.",
    image: "https://i.imgur.com/LpWvdv4.jpg",
    status: "Complete",
    category: "Mobile App",
  },
  {
    name: "Maze Generator",
    href: "/projects/maze",
    description:
      "A simple maze generator built using the JavaScript canvas. (And a C++ version too)",
    image: "https://i.imgur.com/q12X86T.jpg",
    status: "Complete",
    category: "Concept",
  },
  {
    name: "Word Search Generator",
    href: "/projects/wordsearch",
    description:
      "A word search generator built using the JavaScript. Comes with a solver!",
    image: "https://i.imgur.com/FUZQvYk.jpg",
    status: "Complete",
    category: "Concept",
  },
];

export const archivedProjects: Project[] = [
  {
    name: "Youtube Gallery",
    href: "/projects/youtube",
    source: "https://github.com/miromanestar/Youtube-Gallery",
    description:
      "A simple script which generates an interactive gallery of Youtube videos from a playlist with client-side caching.",
    image: "https://i.imgur.com/covKPgf.jpg",
    status: "Complete",
    category: "Web Widget",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    type: "Full Time",
    company: "Schweitzer Engineering Laboratories",
    location: "Chattanooga, TN",
    start: "2026-01-13",
    startLabel: "January 2026",
    endLabel: "Present",
  },
  {
    title: "Software Engineer",
    type: "Full Time",
    company: "Tennessee Valley Authority",
    location: "Chattanooga, TN",
    start: "2020-01-07",
    end: "2020-01-07",
    startLabel: "February 2022",
    endLabel: "January 2026",
  },
  {
    title: "Adjunct Professor",
    type: "Part Time",
    company: "Southern Adventist University",
    location: "Collegedale, TN",
    start: "2024-01-07",
    end: "2026-05-08",
    startLabel: "January 2024",
    endLabel: "May 2026",
  },
];

export const institutions: Institution[] = [
  {
    institution: "Southern Adventist University",
    degree: "M.S. Computer Science",
    level: "Master of Science",
    website: "https://southern.edu",
    date: "August 2021 - May 2023",
  },
  {
    institution: "Southern Adventist University",
    degree: "B.S. Computer Science",
    level: "Bachelor of Science",
    website: "https://southern.edu",
    date: "August 2020 - May 2023",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/miromanestar",
    image: "/images/github.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ManestarMiro",
    image: "/images/twitter.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/miro-manestar/",
    image: "/images/linkedin.svg",
  },
  {
    name: "Email",
    href: "mailto:miroimanestar@gmail.com",
    image: "/images/email.svg",
  },
];
