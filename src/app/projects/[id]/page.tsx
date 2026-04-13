import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, siteConfig } from "@/lib/data";

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

  return (
    <main className="max-w-3xl mx-auto px-6 py-0 pb-20">

      {/* Back link */}
      <div className="py-8 mb-8 border-b border-border dark:border-[#2a2a28]">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.1em] uppercase text-faint dark:text-[#555] hover:text-ink dark:hover:text-[#f0ede6] transition-colors"
        >
          ← Back
        </Link>
      </div>

      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-[10px] tracking-widest text-faint dark:text-[#444] mb-4">
          {project.number}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight mb-4 dark:text-[#f0ede6]">
          {project.title}
        </h1>
        <p className="text-base font-light text-muted dark:text-[#888] leading-relaxed mb-6 max-w-xl">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-wide text-faint dark:text-[#555] border border-border dark:border-[#2a2a28] px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-wide text-muted dark:text-[#888] hover:text-ink dark:hover:text-[#f0ede6] transition-colors border-b border-border dark:border-[#444] pb-0.5"
            >
              Visit site ↗
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-wide text-muted dark:text-[#888] hover:text-ink dark:hover:text-[#f0ede6] transition-colors border-b border-border dark:border-[#444] pb-0.5"
            >
              GitHub ↗
            </Link>
          )}
        </div>
      </div>

      {/* Project image */}
      {project.image && (
        <div className="relative w-full h-72 mb-16 rounded-sm overflow-hidden border border-border dark:border-[#2a2a28]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Case study sections */}
      <div className="space-y-14">

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint dark:text-[#555]">Overview</span>
            <div className="flex-1 h-px bg-border dark:bg-[#2a2a28]" />
          </div>
          <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
            {project.caseStudy.overview}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint dark:text-[#555]">The problem</span>
            <div className="flex-1 h-px bg-border dark:bg-[#2a2a28]" />
          </div>
          <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
            {project.caseStudy.problem}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint dark:text-[#555]">My approach</span>
            <div className="flex-1 h-px bg-border dark:bg-[#2a2a28]" />
          </div>
          <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
            {project.caseStudy.approach}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint dark:text-[#555]">Key decisions</span>
            <div className="flex-1 h-px bg-border dark:bg-[#2a2a28]" />
          </div>
          <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
            {project.caseStudy.decisions}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint dark:text-[#555]">What I learned</span>
            <div className="flex-1 h-px bg-border dark:bg-[#2a2a28]" />
          </div>
          <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
            {project.caseStudy.learned}
          </p>
        </div>

      </div>

      {/* Prev / Next navigation */}
      <div className="mt-20 pt-10 border-t border-border dark:border-[#2a2a28] flex justify-between items-center">
        {prev ? (
          <Link
            href={`/projects/${prev.id}`}
            className="group flex flex-col gap-1"
          >
            <span className="font-mono text-[10px] tracking-widest text-faint dark:text-[#444] uppercase">Previous</span>
            <span className="font-serif text-lg dark:text-[#f0ede6] group-hover:text-muted dark:group-hover:text-[#888] transition-colors">
              ← {prev.title}
            </span>
          </Link>
        ) : <div />}

        {next ? (
          <Link
            href={`/projects/${next.id}`}
            className="group flex flex-col gap-1 text-right"
          >
            <span className="font-mono text-[10px] tracking-widest text-faint dark:text-[#444] uppercase">Next</span>
            <span className="font-serif text-lg dark:text-[#f0ede6] group-hover:text-muted dark:group-hover:text-[#888] transition-colors">
              {next.title} →
            </span>
          </Link>
        ) : <div />}
      </div>

    </main>
  );
}
