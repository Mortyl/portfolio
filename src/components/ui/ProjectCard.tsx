"use client";

import Link from "next/link";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  isLast: boolean;
}

export default function ProjectCard({ project, isLast }: ProjectCardProps) {
  return (
      <div
          className={`group relative p-6 bg-white hover:bg-surface transition-colors ${
              !isLast ? "border-r border-border" : ""
          }`}
      >
        <p className="font-mono text-[10px] tracking-widest text-faint mb-4">
          {project.number}
        </p>
        <h3 className="font-serif text-xl font-normal mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm font-light text-muted leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] tracking-wide text-faint border border-border px-2 py-0.5 rounded-sm">
            {tag}
          </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.url && (
              <Link href={project.url} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[10px] text-muted hover:text-ink transition-colors border-b border-border pb-0.5">
                Visit ↗
              </Link>
          )}
          {project.githubUrl && (
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[10px] text-muted hover:text-ink transition-colors border-b border-border pb-0.5">
                GitHub ↗
              </Link>
          )}
        </div>
      </div>
  );
}