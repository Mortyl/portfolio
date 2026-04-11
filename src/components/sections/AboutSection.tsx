import { siteConfig } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutSection() {
  return (
    <section id="about" className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">
        {/* Aside */}
        <div className="md:col-span-1 pt-1">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-sm bg-surface border border-border flex items-center justify-center font-serif text-2xl text-muted mb-4">
            {siteConfig.initials}
          </div>
          <p className="font-medium text-sm mb-1">{siteConfig.name}</p>
          <p className="font-mono text-[11px] tracking-wide text-faint">
            {siteConfig.role} · {siteConfig.location}
          </p>
        </div>

        {/* Content */}
        <div className="md:col-span-2">
          <SectionLabel>About</SectionLabel>
          <div className="space-y-4">
            {siteConfig.about.map((para, i) => (
              <p key={i} className="text-base font-light text-muted leading-[1.85]">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
