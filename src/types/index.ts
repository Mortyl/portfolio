export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  images?: string[];
  url?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    problem: string;
    approach: string;
    decisions: string;
    learned: string;
  };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
