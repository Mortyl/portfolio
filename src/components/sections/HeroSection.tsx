import Link from "next/link";
import { siteConfig } from "@/lib/data";
import Image from "next/image";

export default function HeroSection() {
  return (
      <section className="mb-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">

          <div className="flex-1 order-2 md:order-1">

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight mb-6 dark:text-[#f0ede6]">
              Building{" "}
              <span className="relative after:absolute after:bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-accent">interfaces</span>
              <br />
              <em className="text-muted dark:text-[#666] not-italic font-serif">
                that feel as good
              </em>
              <br />
              as they look.
            </h1>

            <p className="text-base font-medium mb-8 tracking-wide dark:text-[#c8c5be]">
              {siteConfig.subheading}
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Link
                  href="#work"
                  className="bg-accent text-white text-sm font-medium px-6 py-2.5 rounded-sm hover:bg-accent-dark transition-colors"
              >
                View my work
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-44 h-44 md:w-52 md:h-52">
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-accent-light dark:bg-[#1e1b3a] border border-accent-muted/40 rounded-sm" />
              <div className="relative w-full h-full rounded-sm overflow-hidden border border-accent-muted/40 dark:border-[#2a2a3a] bg-white dark:bg-[#16152a] z-10">
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-4">
                  <div className="w-14 h-14 rounded-full bg-accent-light dark:bg-[#1e1b3a] border border-accent-muted flex items-center justify-center">
                  <span className="font-serif text-xl text-accent dark:text-accent-muted">
                    {siteConfig.initials}
                  </span>
                  </div>
                  <p className="font-mono text-[10px] tracking-widest text-faint dark:text-[#444] uppercase leading-relaxed">
                    Add photo.jpg<br />to /public then<br />uncomment Image below
                  </p>
                </div>
              <Image
                src="/images/programming.png"
                alt={siteConfig.name}
                fill
                className="object-cover object-center"
                priority
              />
              </div>
            </div>
          </div>

        </div>
      </section>
  );
}