import { stack, featuredStack } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import Chip from "@/components/ui/Chip";

export default function StackSection() {
  return (
    <section className="mb-20">
      <SectionLabel>Tech stack</SectionLabel>
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Chip
            key={tech}
            size="md"
            variant={featuredStack.includes(tech) ? "accent" : "neutral"}
          >
            {tech}
          </Chip>
        ))}
      </div>
    </section>
  );
}
