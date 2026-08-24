export type ProjectIcon = "research" | "missions" | "attendance";

export interface Project {
  name: string;
  href: string;
  source?: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  navigationIcon?: ProjectIcon;
}

export interface Experience {
  title: string;
  type: string;
  company: string;
  logo: string;
  location: string;
  description: string;
  skills: string[];
  startLabel: string;
  endLabel: string;
}

export interface Education {
  institution: string;
  logo: string;
  location: string;
  website: string;
  graduationYear: string;
  degrees: Array<{
    field: string;
    level: string;
    date: string;
  }>;
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
  hero: {
    eyebrow: "Software Engineer",
    statement: {
      lead: "Transforming",
      body: "lines of code into works of art",
      closing: "one keystroke at a time.",
    },
  },
  about: [
    "I'm a software engineer who enjoys turning complex technical problems into clear, dependable software. I care about thoughtful interfaces, practical architecture, and building tools that feel intuitive without hiding the complexity behind them.",
    "My background spans full-stack applications visualization, and teaching. I'm drawn to work that keeps me learning and makes difficult ideas easier for others to understand.",
  ],
  quickFacts: [
    {
      label: "Current role",
      value: "Software Engineer at SEL",
    },
    {
      label: "Based in",
      value: "Chattanooga, Tennessee",
    },
    {
      label: "Focus",
      value: "Full-stack with UI specialization",
    },
  ],
  images: {
    portrait: {
      src: "https://i.imgur.com/zmpb9Fx.jpeg",
      alt: "Miro Manestar",
      width: 708,
      height: 957,
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
    category: "Full Stack Application",
    featured: true,
    navigationIcon: "attendance",
  },
  {
    name: "Snake in Rust",
    href: "/projects/snake",
    description: "A very simple snake game built in Rust and compiled for WASM",
    image: "https://i.imgur.com/yXQByXt.jpeg",
    category: "Game",
  },
  {
    name: "Constraint Based Programming",
    href: "https://constraints.miromanestar.com/",
    description:
      "A simple visualizer for constraint based programming. Done in Javascript!",
    image: "https://i.imgur.com/lMiMbdF.jpg",
    category: "Visualizer",
  },
  {
    name: "Segmentation Simulator",
    href: "https://sim.miromanestar.com/",
    description:
      "A memory segmentation and virtual address translation visualizer.",
    image: "https://i.imgur.com/rT88WGi.jpg",
    category: "Visualizer",
  },
  {
    name: "RayCalc",
    href: "/projects/raycalc",
    description:
      "A cross-platform radiation dosimetry app build for emergency situations.",
    image: "https://i.imgur.com/LpWvdv4.jpg",
    category: "Mobile App",
  },
  {
    name: "Maze Generator",
    href: "/projects/maze",
    description:
      "A simple maze generator built using the JavaScript canvas. (And a C++ version too)",
    image: "https://i.imgur.com/q12X86T.jpg",
    category: "Concept",
  },
  {
    name: "Word Search Generator",
    href: "/projects/wordsearch",
    description:
      "A word search generator built using the JavaScript. Comes with a solver!",
    image: "https://i.imgur.com/FUZQvYk.jpg",
    category: "Concept",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    type: "Full Time",
    company: "Schweitzer Engineering Laboratories",
    logo: "/images/sel_logo.jpg",
    location: "Chattanooga, TN",
    description:
      "Building full-stack software that supports real-time control and management of power systems.",
    skills: [
      "Dart",
      "JavaScript",
      "C#",
      ".NET",
      "WPF",
      "Jenkins",
      "Cypress",
      "Kubernetes",
    ],
    startLabel: "January 2026",
    endLabel: "Present",
  },
  {
    title: "Software Engineer",
    type: "Full Time",
    company: "Tennessee Valley Authority",
    logo: "/images/tva_logo.jpg",
    location: "Chattanooga, TN",
    description:
      "Developed and supported software for operational data and engineering workflows using C#, .NET, SQL, and AVEVA PI.",
    skills: ["C#", ".NET", "SQL", "Aveva PI"],
    startLabel: "February 2022",
    endLabel: "January 2026",
  },
  {
    title: "Adjunct Professor",
    type: "Part Time",
    company: "Southern Adventist University",
    logo: "/images/sau_logo.jpg",
    location: "Collegedale, TN",
    description:
      "Taught a university course in Linux and Unix Systems Administration.",
    skills: ["Linux", "System Administration", "Teaching"],
    startLabel: "January 2024",
    endLabel: "May 2026",
  },
];

export const education: Education = {
  institution: "Southern Adventist University",
  logo: "/images/sau_logo.jpg",
  location: "Collegedale, Tennessee",
  website: "https://southern.edu",
  graduationYear: "2023",
  degrees: [
    {
      field: "Computer Science",
      level: "Master of Science",
      date: "August 2021 - May 2023",
    },
    {
      field: "Computer Science",
      level: "Bachelor of Science",
      date: "August 2020 - May 2023",
    },
  ],
};

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
