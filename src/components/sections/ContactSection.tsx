import Link from "next/link";
import { socialLinks } from "@/lib/data";

export default function ContactSection() {
  return (
    <footer id="contact" className="border-t border-border dark:border-[#2a2a28] pt-10 flex justify-end items-center gap-6 flex-wrap">
      <nav className="flex flex-wrap gap-5">
        {socialLinks.map((link) => (
          <Link key={link.label} href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted dark:text-[#666] hover:text-ink dark:hover:text-[#f0ede6] transition-colors border-b border-border dark:border-[#333] pb-0.5">
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
