import { Project, NavLink, SocialLink } from "@/types";

export const siteConfig = {
  name: "Marcus Ortyl",
  initials: "MO",
  role: "Frontend Developer",
  location: "UK",
  email: "you@email.com",
  tagline: "Building interfaces that feel as good as they look.",
  subheading:
    "Frontend developer with a sharp eye for detail and a bias for clean code.",
  description:
    "I've spent the last few years working at the intersection of design and engineering — writing TypeScript, building component libraries, and sweating the details that most people miss.",
  about: [
    "Frontend Developer looking for new opprtunities",
    "Mention the kinds of teams or projects you've worked on, and what you're looking for next. Keep it human, not corporate.",
  ],
  openToWork: true,
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
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
  "React Native",
  "Javascript",
  "Python",
  "Kubernetes",
  "Node.js",
  "Git",
  "Java",
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
    url: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-alpha",
  },
  {
    id: "project-beta",
    number: "02",
    title: "Project Beta",
    description:
      "One or two sentences — what it does, who uses it, and what made it interesting.",
    tags: ["React", "Tailwind", "Zustand"],
    url: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-beta",
  },
  {
    id: "project-gamma",
    number: "03",
    title: "Project Gamma",
    description:
      "Highlight a technical challenge you overcame or a design decision you're proud of.",
    tags: ["TypeScript", "Framer Motion", "CMS"],
    url: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-gamma",
  },
];
