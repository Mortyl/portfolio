import { projects } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="work" className="mb-20">
      <SectionLabel>Selected work</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-3 border border-border rounded-sm overflow-hidden">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            isLast={i === projects.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
