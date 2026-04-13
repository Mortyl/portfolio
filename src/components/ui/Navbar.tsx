"use client";

import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 mb-16 border-b border-border dark:border-[#2a2a28]">
      <span className="font-mono text-sm text-muted dark:text-[#666] tracking-wide">
        {siteConfig.name.toLowerCase().replace(" ", "")}.dev
      </span>
      <div className="flex items-center gap-8">
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted dark:text-[#888] hover:text-ink dark:hover:text-[#f0ede6] transition-colors duration-150 tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
