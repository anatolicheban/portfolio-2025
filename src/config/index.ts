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
    { text: "LinkedIn", href: "https://www.linkedin.com/in/anatoli-cheban-251959246/" },
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
      position: "Frontend/Three.js Developer",
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
    }
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
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

// #5755ff
