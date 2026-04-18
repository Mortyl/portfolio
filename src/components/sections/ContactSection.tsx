import Link from "next/link";
import { socialLinks } from "@/lib/data";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="border-t border-accent-muted/30 dark:border-[#2a2a3a] pt-10 flex justify-center items-center gap-6 flex-wrap"
    >
      <nav className="flex flex-wrap gap-5">
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
      </nav>
    </footer>
  );
}
