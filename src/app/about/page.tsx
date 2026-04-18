import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 pb-20">

            {/* Header */}
            <div className="py-8 mb-12 border-b border-accent-muted/30 dark:border-[#2a2a3a] flex justify-between items-center">
                <Link
                    href="/"
                    className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent dark:text-accent-muted hover:text-accent-dark transition-colors"
                >
                    ← Back
                </Link>
                <ThemeToggle />
            </div>

            {/* Intro */}
            <div className="mb-16">
                <p className="font-mono text-[10px] tracking-widest text-accent dark:text-accent-muted uppercase mb-4">
                    About
                </p>
                <div className="flex items-center justify-between gap-8 pr-8">
                    <div>
                        <h1 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight mb-3 dark:text-[#f0ede6]">
                            {siteConfig.name}
                        </h1>
                        <p className="font-mono text-[11px] tracking-wide text-faint dark:text-[#555]">
                            {siteConfig.role} · {siteConfig.location}
                        </p>
                    </div>
                    <div className="flex-shrink-0 w-32 h-32 rounded-full overflow-hidden border border-accent-muted/40 dark:border-[#2a2a3a]">
                        <Image
                            src="/photo.jpg"
                            alt={siteConfig.name}
                            width={128}
                            height={128}
                            className="object-cover object-center w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* About sections */}
            <div className="space-y-14 mb-20">

                <div>
                    <SectionLabel>Background</SectionLabel>
                    <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
                        {siteConfig.description}
                    </p>
                </div>

                <div>
                    <SectionLabel>What I enjoy</SectionLabel>
                    <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
                        I'm drawn to the problem-solving side of development — there's a particular satisfaction in hitting a wall, working through it,
                        and coming out the other side with something that actually works. I also care about the finished product. Knowing that something
                        I built is being used by real people is what keeps me motivated. Outside of code I'm into fitness, climbing, competitive gaming and guitar,
                        and I'd love to build something in one of those spaces one day — there's no shortage of problems worth solving there.
                    </p>
                </div>

                <div>
                    <SectionLabel>Experience</SectionLabel>
                    <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
                        I've spent the last 13 months working as a freelance developer, taking on projects independently and managing the
                        full development lifecycle from brief to delivery. Before that I worked as an Applications Developer at
                        Brightpearl and spent six months at Illumo, a tech consultancy, where I got exposure to client-facing development
                        work across different stacks. Alongside this I've been consistently upskilling through Treehouse and courses on Udemy.
                        I am now trying to build more of my own full stack projects to sharpen my backend skills.
                    </p>
                </div>

                <div>
                    <SectionLabel>Looking for</SectionLabel>
                    <p className="text-base font-light text-muted dark:text-[#999] leading-[1.85]">
                        I'm looking to move back into a full-time role where I can work on a quality product or
                        something genuinely interesting. Industry doesn't matter much to me — I care more about
                        the work itself, the team around me, and having room to grow. I'm open to junior or mid-level
                        web developer positions and am focused on gaining more experience, building on what I already know,
                        and contributing to something worth building.
                    </p>
                </div>

            </div>

            {/* Footer links */}
            <footer className="border-t border-accent-muted/30 dark:border-[#2a2a3a] pt-10 flex justify-center items-center gap-6 flex-wrap">
                {socialLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted dark:text-[#666] hover:text-accent dark:hover:text-accent-muted transition-colors border-b border-accent-muted/40 pb-0.5"
                    >
                        {link.label}
                    </Link>
                ))}
            </footer>

        </main>
    );
}