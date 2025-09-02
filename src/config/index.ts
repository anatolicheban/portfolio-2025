import type { SiteConfig, SiteContent } from "@types";

export const SITE_CONFIG: SiteConfig = {
  title: "Anatoli Cheban — Fullstack/Three.js Developer",
  author: "Anatoli Cheban",
  description:
    "Frontend & Fullstack Developer based in Europe, specializing in React, TypeScript, and advanced 3D experiences with Three.js. Experienced in building interactive applications, high-performance web platforms, and modern UI/UX.",
  lang: "en",
  siteLogo: "/alejandro-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Email", href: "mailto:tolik.cheban.2019@gmail.com" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/anatoli-cheban-251959246/",
    },
    { text: "Github", href: "https://github.com/anatolicheban" },
    { text: "Telegram", href: "https://t.me/anatolicheban" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Anatoli Cheban",
    specialty: "Fullstack/Three.js Developer",
    summary:
      "Frontend & Fullstack Developer based in Europe, specializing in React, TypeScript, and advanced 3D experiences with Three.js. Experienced in building interactive applications, high-performance web platforms, and modern UI/UX.",
    email: "tolik.cheban.2019@gmail.com",
  },
  experience: [
    {
      company: "3DVisual",
      position: "Frontend / Three.js Developer",
      startDate: "Oct 2024",
      endDate: "present",
      summary: [
        "Developing advanced 3D configurators with React and Three.js, combined with backend logic in NestJS.",
        "Responsible for system architecture, performance optimization (achieved stable 60fps), and integrations with external APIs such as Microsoft Graph.",
        "Selected projects include high-performance 3D web applications tailored for B2B clients.",
      ],
    },
    {
      company: "Todor3D",
      position: "Frontend / Three.js Developer",
      startDate: "Feb 2022",
      endDate: "Oct 2024",
      summary: [
        "Built corporate and product websites using React and WordPress, ensuring responsive design and smooth user experiences.",
        "Developed full-stack web applications (including custom admin panels) with React on the frontend and Node.js/NestJS on the backend.",
        "Designed and implemented interactive 3D configurators with Three.js, focusing on efficient rendering pipelines and stable performance for production-ready use.",
      ],
    },
    {
      company: "Freelance",
      position: "WordPress Developer / 3D Visualization Developer",
      startDate: "Jun 2022",
      endDate: "present",
      summary: [
        "Developed responsive websites and custom WordPress themes based on Figma designs. Managed full project lifecycle from design to deployment, ensuring fast delivery and quality standards.",
        "Independently worked on 3D visualization projects using Three.js, focusing on interactive graphics, real-time rendering, and experimental web experiences.",
      ],
    },
  ],
  projects: [
    {
      name: "3D Frame Configurator",
      summary:
        "A web application for customizing wooden frames, doors, and windows with real-time 3D visualization.",
      linkPreview: "https://frames3d.vercel.app/?frame=62",
      image: "/frames3d.png",
    },
    {
      name: "Modular House Configurator",
      summary:
        "An interactive 3D tool for designing modular houses with customizable layouts and real-time visualization.",
      linkPreview: "https://houses3d.vercel.app/?mode=admin",
      image: "/houses3d.png",
    },
    {
      name: "Flightcase Configurator",
      summary: "A 3D configurator for designing custom transport cases.",
      linkPreview: "https://www.awcases.nl/configurator/?type=rack",
      image: "/awcases.png",
    },
  ],
  about: {
    description: `
    Hi, I’m Anatoli Cheban, a Fullstack and Three.js Developer with a passion for creating interactive and visually engaging web applications. I enjoy working where design, technology, and performance meet, turning complex ideas into smooth and intuitive digital experiences.

    My experience spans from developing responsive websites and custom WordPress themes to building advanced 3D configurators and full-stack applications with React, NestJS, and Three.js. I focus on clean architecture, high performance, and delivering products that combine functionality with a strong user experience.
  `,
    image: "/alejandro-big.jpg",
  },
};
