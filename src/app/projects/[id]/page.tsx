import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, siteConfig } from "@/lib/data";
import ImageGallery from "@/components/ui/ImageGallery";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: `${project.title} — ${siteConfig.name}`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === params.id);
  const prev = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  const sections = [
    { label: "Overview", content: project.caseStudy.overview },
    { label: "The problem", content: project.caseStudy.problem },
    { label: "My approach", content: project.caseStudy.approach },
    { label: "Key decisions", content: project.caseStudy.decisions },
    { label: "What I learned", content: project.caseStudy.learned },
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-0 pb-20">
      <div className="py-8 mb-8 border-b border-accent-muted/30 dark:border-[#2a2a3a]">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent dark:text-accent-muted hover:text-accent-dark transition-colors"
        >
          ← Back
        </Link>
      </div>

      <div className="mb-12">
        <p className="font-mono text-[10px] tracking-widest text-accent/60 dark:text-accent-muted/50 mb-4">
          {project.number}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight mb-4 dark:text-[#f0ede6]">
          {project.title}
        </h1>
        <p className="text-base font-light text-muted dark:text-[#888] leading-relaxed mb-6 max-w-xl">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wide text-accent dark:text-accent-muted border border-accent-muted/40 bg-accent-light/50 dark:bg-[#1e1b3a] px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-5">
          {project.url && (
            <Link href={project.url} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-wide text-accent dark:text-accent-muted hover:text-accent-dark transition-colors border-b border-accent-muted/40 pb-0.5">
              Visit site ↗
            </Link>
          )}
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-wide text-accent dark:text-accent-muted hover:text-accent-dark transition-colors border-b border-accent-muted/40 pb-0.5">
              GitHub ↗
            </Link>
          )}
        </div>
      </div>

      {(project.images && project.images.length > 0) || project.image ? (
          <ImageGallery
              images={project.images ?? (project.image ? [project.image] : [])}
              title={project.title}
          />
      ) : null}

      <div className="space-y-14">
        {sections.map(({ label, content }) => (
          <div key={label}>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-accent dark:text-accent-muted">
                {label}
              </span>
              <div className="flex-1 h-px bg-accent-muted/30 dark:bg-[#2a2a3a]" />
            </div>
            <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
              {content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-accent-muted/30 dark:border-[#2a2a3a] flex justify-between items-center">
        {prev ? (
          <Link href={`/projects/${prev.id}`} className="group flex flex-col gap-1">
            <span className="font-mono text-[10px] tracking-widest text-accent/60 dark:text-accent-muted/50 uppercase">Previous</span>
            <span className="font-serif text-lg dark:text-[#f0ede6] group-hover:text-accent dark:group-hover:text-accent-muted transition-colors">
              ← {prev.title}
            </span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/projects/${next.id}`} className="group flex flex-col gap-1 text-right">
            <span className="font-mono text-[10px] tracking-widest text-accent/60 dark:text-accent-muted/50 uppercase">Next</span>
            <span className="font-serif text-lg dark:text-[#f0ede6] group-hover:text-accent dark:group-hover:text-accent-muted transition-colors">
              {next.title} →
            </span>
          </Link>
        ) : <div />}
      </div>
    </main>
  );
}
