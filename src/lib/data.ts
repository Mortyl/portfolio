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
      "/images/taskflow/LoginScreen.jpg",
      "/images/taskflow/CreateAccountScreen.jpg",
      "/images/taskflow/BoardHomeScreen.jpg",
      "/images/taskflow/BoardIdscreen.jpg",
      "/images/taskflow/EditCard.jpg"
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
    id: "PoEProfessor",
    number: "02",
    title: "PoEProfessor (beta)",
    description:
      "Path of Exile 2's first AI powered companion app — currently being actively developed. Features a build guide generator, interactive passive skill tree visualiser, and a companion feature which uses an expertly hand-written PoE2 knowledge base. Private repository but can give live demo on request.",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "Anthropic", "Canvas API"],
    images: [
      "/images/poe-professor/CompanionScreen.jpg",
    ],
    url: undefined,
    githubUrl: undefined,
    caseStudy: {
      overview:
        "PoEProfessor is a Path of Exile 2 companion web app inspired by Porofessor.gg — currently in active development. It currently features an AI build guide generator, a floating Shaper chat companion powered by Claude, an interactive passive skill tree canvas, and a growing structured knowledge base covering PoE2 mechanics, weapons, classes, and ascendancies. More features are being developed.",
      problem:
        "Path of Exile 2 is an extremely complex ARPG with thousands of different mechanics and builds which can be overwhelming for newer and intermediate players. We are trying to provide a tool which minimises this steep learning curve and encourages build innovation. There is currently no single tool which explains builds, highlights relevant passive nodes, and answers game mechanic questions in context.",
      approach:
        "Built a Next.js frontend with a canvas-based passive skill tree visualiser and a FastAPI Python backend. The AI layer uses Anthropic's Claude API fueled by a hand-curated knowledge base of markdown files. Rather than dumping raw game data at the AI, each file is carefully authored — sifting through patch notes, community resources, and Path of Building data to extract only what is accurate, current, and relevant to the questions being asked.",
      decisions:
        "The key decision was building a file-based knowledge system rather than relying on Claude's training data alone. PoE2 is in Early Access and Claude's training data contains a lot of PoE1 knowledge — without grounding, the AI confidently gives wrong answers. Curating the knowledge base manually means every piece of information the AI uses has been verified against the current patch, keeping responses accurate as the game continues to change.",
      learned:
        "So far this project has taught me how important data collection and prompt grounding is when using LLMs in domain-specific contexts. It's also the first project where I have used Python which has allowed me to improve my skills in a valuable new programming language. I have also used this opportunity to structure a FastAPI backend for AI powered endpoints. One of the bigger features was building a zoomable and pannable passive tree canvas renderer from scratch using the Canvas API.",
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
