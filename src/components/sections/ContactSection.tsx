import Link from "next/link";
import { socialLinks, siteConfig } from "@/lib/data";

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="border-t border-border pt-10 flex justify-end items-center gap-6"
    >

      <nav className="flex flex-wrap gap-5">
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-ink transition-colors border-b border-border pb-0.5"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
