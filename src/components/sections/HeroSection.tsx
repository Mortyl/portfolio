import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-faint dark:bg-[#444]" />
            <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-faint dark:text-[#555]">
              {siteConfig.role}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight mb-6 dark:text-[#f0ede6]">
            Building interfaces
            <br />
            <em className="text-muted dark:text-[#666] not-italic font-serif">
              that feel as good
            </em>
            <br />
            as they look.
          </h1>

          <p className="text-base font-medium mb-3 tracking-wide dark:text-[#c8c5be]">
            {siteConfig.subheading}
          </p>

          <p className="max-w-lg text-base font-light text-muted dark:text-[#888] leading-relaxed mb-8">
            {siteConfig.description}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="#work"
              className="bg-ink dark:bg-[#f0ede6] text-white dark:text-[#111110] text-sm font-medium px-6 py-2.5 rounded-sm hover:opacity-80 transition-opacity"
            >
              View my work
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <div className="relative w-56 h-64 md:w-64 md:h-72">
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-surface dark:bg-[#1a1a18] border border-border dark:border-[#2a2a28] rounded-sm" />
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-border dark:border-[#2a2a28] bg-surface dark:bg-[#1a1a18] z-10">
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-4">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#222220] border border-border dark:border-[#333] flex items-center justify-center">
                  <span className="font-serif text-xl text-muted dark:text-[#666]">
                    {siteConfig.initials}
                  </span>
                </div>
                <p className="font-mono text-[10px] tracking-widest text-faint dark:text-[#444] uppercase leading-relaxed">
                  Add photo.jpg<br />to /public then<br />uncomment Image below
                </p>
              </div>
              {/*
              <Image
                src="/photo.jpg"
                alt={siteConfig.name}
                fill
                className="object-cover object-top"
                priority
              />
              */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
