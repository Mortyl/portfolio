import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface PageHeaderProps {
  /** Show the theme toggle alongside the back link. Defaults to true. */
  showThemeToggle?: boolean;
  /** Override the bottom margin (e.g. "mb-8"). Defaults to "mb-12". */
  marginBottom?: string;
}

/**
 * Shared "← Back to home" header used on the about, contact, and project
 * case-study pages. Previously duplicated verbatim across all three.
 */
export default function PageHeader({
  showThemeToggle = true,
  marginBottom = "mb-12",
}: PageHeaderProps) {
  return (
    <div
      className={`py-8 ${marginBottom} border-b border-accent-muted/30 dark:border-[#2a2a3a] flex justify-between items-center`}
    >
      <Link
        href="/"
        className="font-mono text-[11px] tracking-[0.1em] uppercase text-accent dark:text-accent-muted hover:text-accent-dark transition-colors"
      >
        ← Back
      </Link>
      {showThemeToggle && <ThemeToggle />}
    </div>
  );
}
