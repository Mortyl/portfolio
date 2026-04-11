"use client";

import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/data";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 mb-16 border-b border-border">
      <span className="font-mono text-sm text-muted tracking-wide">
        {siteConfig.name.toLowerCase().replace(" ", "")}
        .dev
      </span>
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-muted hover:text-ink transition-colors duration-150 tracking-wide"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
