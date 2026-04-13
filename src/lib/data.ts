import { Project, NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Your Name",
  initials: "YN",
  role: "Frontend Developer",
  location: "UK",
  email: "you@email.com",
  tagline: "Building interfaces that feel as good as they look.",
  subheading:
    "Frontend developer with a sharp eye for detail and a bias for clean code.",
  description:
    "I've spent the last few years working at the intersection of design and engineering — writing TypeScript, building component libraries, and sweating the details that most people miss.",
  about: [
    "A short paragraph about you — your background, what you care about in frontend development, and what kind of work you enjoy most.",
    "Mention the kinds of teams or projects you've worked on, and what you're looking for next. Keep it human, not corporate.",
  ],
  openToWork: true,
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "GitHub", href: "https://github.com/yourusername" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
  { label: "CV", href: "/cv.pdf" },
];

export const stack: string[] = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Storybook",
  "Figma",
  "Vitest",
  "Playwright",
  "Node.js",
  "Git",
  "Vercel",
];

export const featuredStack = ["Next.js", "TypeScript", "React", "Tailwind CSS"];

export const projects: Project[] = [
  {
    id: "project-alpha",
    number: "01",
    title: "Project Alpha",
    description:
      "A short, punchy description of what you built and the problem it solved.",
    tags: ["Next.js", "TypeScript", "API"],
    image: undefined,
    url: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-alpha",
    caseStudy: {
      overview:
        "A brief overview of the project — what it is, who it's for, and why it exists. 2-3 sentences.",
      problem:
        "Describe the problem you were trying to solve. What was broken, missing, or painful? What were the constraints?",
      approach:
        "Walk through how you tackled it. What did you build first? How did you structure things? What tools or patterns did you reach for and why?",
      decisions:
        "Talk about a key technical or design decision you made. What were the options? Why did you go the way you did? Were there trade-offs?",
      learned:
        "What did you take away from this project? A new technique, a lesson about scope, something about working with a team or a client?",
    },
  },
  {
    id: "project-beta",
    number: "02",
    title: "Project Beta",
    description:
      "One or two sentences — what it does, who uses it, and what made it interesting.",
    tags: ["React", "Tailwind", "Zustand"],
    image: undefined,
    url: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-beta",
    caseStudy: {
      overview:
        "A brief overview of the project — what it is, who it's for, and why it exists. 2-3 sentences.",
      problem:
        "Describe the problem you were trying to solve. What was broken, missing, or painful? What were the constraints?",
      approach:
        "Walk through how you tackled it. What did you build first? How did you structure things? What tools or patterns did you reach for and why?",
      decisions:
        "Talk about a key technical or design decision you made. What were the options? Why did you go the way you did? Were there trade-offs?",
      learned:
        "What did you take away from this project? A new technique, a lesson about scope, something about working with a team or a client?",
    },
  },
  {
    id: "project-gamma",
    number: "03",
    title: "Project Gamma",
    description:
      "Highlight a technical challenge you overcame or a design decision you're proud of.",
    tags: ["TypeScript", "Framer Motion", "CMS"],
    image: undefined,
    url: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-gamma",
    caseStudy: {
      overview:
        "A brief overview of the project — what it is, who it's for, and why it exists. 2-3 sentences.",
      problem:
        "Describe the problem you were trying to solve. What was broken, missing, or painful? What were the constraints?",
      approach:
        "Walk through how you tackled it. What did you build first? How did you structure things? What tools or patterns did you reach for and why?",
      decisions:
        "Talk about a key technical or design decision you made. What were the options? Why did you go the way you did? Were there trade-offs?",
      learned:
        "What did you take away from this project? A new technique, a lesson about scope, something about working with a team or a client?",
    },
  },
];
