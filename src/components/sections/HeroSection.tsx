import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="mb-20">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">

        {/* Left — text content */}
        <div className="flex-1">

          {/* Label + availability badge */}
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <div className="w-5 h-px bg-faint" />
            <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-faint">
              {siteConfig.role}
            </span>
            {siteConfig.openToWork && (
              <span className="font-mono text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-sm bg-accent-light text-accent border border-accent-muted">
                Open to work
              </span>
            )}
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight mb-6">
            Building interfaces
            <br />
            <em className="text-muted not-italic font-serif">
              that feel as good
            </em>
            <br />
            as they look.
          </h1>

          {/* Subheading */}
          <p className="text-base font-medium mb-3 tracking-wide">
            {siteConfig.subheading}
          </p>

          {/* Description */}
          <p className="max-w-lg text-base font-light text-muted leading-relaxed mb-8">
            {siteConfig.description}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="#work"
              className="bg-ink text-white text-sm font-medium px-6 py-2.5 rounded-sm hover:opacity-80 transition-opacity"
            >
              View my work
            </Link>
            <Link
              href="#about"
              className="text-sm text-muted border border-border px-6 py-2.5 rounded-sm hover:bg-surface hover:text-ink transition-colors"
            >
              About me
            </Link>
            <Link
              href={"mailto:" + siteConfig.email}
              className="text-sm text-accent font-medium hover:underline underline-offset-4 transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        {/* Right — photo */}
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <div className="relative w-56 h-64 md:w-64 md:h-72">

            {/* Blue accent shadow block */}
            <div className="absolute -bottom-2 -right-2 w-full h-full bg-accent-light border border-accent-muted rounded-sm" />

            {/* Photo frame */}
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-border bg-surface z-10">

              {/* Placeholder — replace with your photo */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-4">
                <div className="w-14 h-14 rounded-full bg-accent-light border border-accent-muted flex items-center justify-center">
                  <span className="font-serif text-xl text-accent">
                    {siteConfig.initials}
                  </span>
                </div>
                <p className="font-mono text-[10px] tracking-widest text-faint uppercase leading-relaxed">
                  Add photo.jpg<br />to /public then<br />uncomment Image below
                </p>
              </div>

              {/*
                TO ADD YOUR PHOTO:
                1. Copy your photo into the /public folder as photo.jpg
                2. Delete the placeholder <div> above
                3. Uncomment the block below
              */}
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
