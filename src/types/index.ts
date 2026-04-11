export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  githubUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
