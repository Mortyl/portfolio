import { stack, featuredStack } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";

export default function StackSection() {
  return (
    <section className="mb-20">
      <SectionLabel>Tech stack</SectionLabel>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => {
          const isFeatured = featuredStack.includes(tech);
          return (
            <span
              key={tech}
              className={`font-mono text-xs px-3 py-1.5 rounded-sm border transition-colors ${
                isFeatured
                  ? "border-accent-muted text-accent dark:text-accent-muted bg-accent-light dark:bg-[#1e1b3a]"
                  : "border-border dark:border-[#2a2a3a] text-muted dark:text-[#666] bg-white dark:bg-[#16152a]"
              }`}
            >
              {tech}
            </span>
          );
        })}
      </div>
    </section>
  );
}
