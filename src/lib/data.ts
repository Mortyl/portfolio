import { Project, NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Marcus Ortyl",
  initials: "MO",
  role: "Full stack developer",
  location: "UK",
  email: "marcusortyl@gmail.com",
  tagline: "Building interfaces that feel as good as they look.",
  subheading:
    "Hi I'm Marcus, a full-stack web developer with a sharp eye for detail and a bias for clean code.",
  description:
      "Full-stack Web Developer with 3+ years of experience building modern web applications and websites. I have experience across a range of technologies however currently would say I specialise in React, TypeScript, JavaScript, Angular and Next.js on the front end, with Node.js and Python on the backend.",
  about: [
    "A short paragraph about you — your background, what you care about in frontend development, and what kind of work you enjoy most.",
    "Mention the kinds of teams or projects you've worked on, and what you're looking for next. Keep it human, not corporate.",
  ],
  openToWork: true,
};

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Mortyl" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/marcus-ortyl-058138151/" },
  { label: "CV", href: "/cv.pdf" },
];

export const stack: string[] = [
  "TypeScript/Javascript",
  "Next.js",
  "React",
  "Node.js",
  "REST APIs",
  "Git & GitHub",
  "PostgreSQL",
  "Angular",
  "HTML/CSS",
  "TailwindCSS",
  "Vercel",
  "Python",
  "Socket.io",
  "Prisma",
  "Kubernetes basics",
];

export const featuredStack = ["Next.js", "TypeScript/Javascript", "React", "Node.js"];

export const projects: Project[] = [
  {
    id: "taskflow",
    number: "01",
    title: "TaskFlow",
    description: "A real-time collaborative task manager built with Next.js, TypeScript, Socket.io and PostgreSQL. Features drag and drop, live activity feeds, and multi-user collaboration.",
    tags: ["Next.js", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Prisma"],
    image: undefined,
    images: [
      "/images/LoginScreen.jpg",
      "/images/CreateAccountScreen.jpg",
      "/images/BoardHomeScreen.jpg",
      "/images/BoardIdscreen.jpg",
      "/images/EditCard.jpg"
    ],
    url: undefined,
    githubUrl: "https://github.com/Mortyl/task-manager",
    caseStudy: {
      overview: "TaskFlow is a Trello-style collaborative task manager where multiple users can work on boards in real time. Users can create boards, add columns and cards, drag cards between columns, and see live updates from other users instantly.",
      problem: "Most task managers don't show live updates without refreshing — collaborating with a team means constantly missing changes. I wanted to build something where changes are reflected instantly across all connected users.",
      approach: "I built a custom Node.js server alongside Next.js to support persistent WebSocket connections via Socket.io. The frontend uses React with @dnd-kit for drag and drop, and the backend uses Prisma with PostgreSQL on Neon for data storage.",
      decisions: "The key decision was using a custom Node.js server rather than Next.js API routes alone. Next.js serverless functions can't maintain persistent connections which Socket.io requires. This meant more setup but gave full control over the real-time layer.",
      learned: "I learned how real-time systems work at a deeper level — managing rooms, broadcasting events, and keeping client state in sync with the server. I also got experience designing a relational database schema with Prisma and handling JWT authentication from scratch.",
    },
  },
  {
    id: "PoEProffessor",
    number: "02",
    title: "PoEProfessor",
    description:
      "In Progress..",
    tags: ["Angular", "Typescript", "Node.js"],
    image: undefined,
    url: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-beta",
    caseStudy: {
      overview:
        "PoEProfessor is a web application linked to the ARPG Path of exile, used to discover builds and view ladder rankings using the PoENinja API among many other things.",
      problem:
        "",
      approach:
        "",
      decisions:
        "",
      learned:
        "",
    },
  },
  {
    id: "project-gamma",
    number: "03",
    title: "Project Gamma",
    description:
      "Coming Soon.",
    tags: ["TypeScript", "Python", "MongoDB"],
    image: undefined,
    url: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-gamma",
    caseStudy: {
      overview:
        "TBA",
      problem:
        "",
      approach:
        "",
      decisions:
        "",
      learned:
        "",
    },
  },
];
