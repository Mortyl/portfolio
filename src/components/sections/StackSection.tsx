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
                  ? "border-border dark:border-[#333] text-ink dark:text-[#f0ede6] bg-white dark:bg-[#1a1a18]"
                  : "border-border dark:border-[#2a2a28] text-muted dark:text-[#666] bg-surface dark:bg-[#161614]"
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
