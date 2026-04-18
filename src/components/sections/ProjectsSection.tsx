import Link from "next/link";
import { projects } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="work" className="mb-20">
      <SectionLabel>Selected work</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-3 border border-accent-muted/30 dark:border-[#2a2a3a] rounded-sm overflow-hidden">
        {projects.map((project, i) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className={`group relative p-6 bg-white dark:bg-[#16152a] hover:bg-accent-light dark:hover:bg-[#1e1b3a] transition-colors ${
              i !== projects.length - 1
                ? "border-b md:border-b-0 md:border-r border-accent-muted/30 dark:border-[#2a2a3a]"
                : ""
            }`}
          >
            <span className="absolute top-6 right-6 text-sm text-faint dark:text-[#444] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 text-accent">
              ↗
            </span>
              {(project.images?.[0] || project.image) && (
                  <div className="relative w-full h-32 mb-4 rounded-sm overflow-hidden border border-accent-muted/20 dark:border-[#2a2a3a]">
                      <Image
                          src={project.images?.[0] ?? project.image!}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                      />
                  </div>
              )}
              <p className="font-mono text-[10px] tracking-widest text-accent/60 dark:text-accent-muted/50 mb-4">
                  {project.number}
              </p>
            <h3 className="font-serif text-xl font-normal mb-2 leading-tight dark:text-[#f0ede6]">
              {project.title}
            </h3>
            <p className="text-sm font-light text-muted dark:text-[#888] leading-relaxed mb-5">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wide text-accent dark:text-accent-muted border border-accent-muted/40 dark:border-[#2a2a3a] bg-accent-light/50 dark:bg-[#1e1b3a] px-2 py-0.5 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
