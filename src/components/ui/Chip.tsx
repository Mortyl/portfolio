import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  /** sm = compact (project tags). md = roomy (stack chips). */
  size?: "sm" | "md";
  /** accent = strong accent. accentSoft = subtle accent. neutral = muted grey. */
  variant?: "accent" | "accentSoft" | "neutral";
}

const sizeClasses: Record<NonNullable<ChipProps["size"]>, string> = {
  sm: "text-[10px] tracking-wide px-2 py-0.5",
  md: "text-xs px-3 py-1.5",
};

const variantClasses: Record<NonNullable<ChipProps["variant"]>, string> = {
  accent:
    "border-accent-muted text-accent dark:text-accent-muted bg-accent-light dark:bg-[#1e1b3a]",
  accentSoft:
    "border-accent-muted/40 dark:border-[#2a2a3a] text-accent dark:text-accent-muted bg-accent-light/50 dark:bg-[#1e1b3a]",
  neutral:
    "border-border dark:border-[#2a2a3a] text-muted dark:text-[#666] bg-white dark:bg-[#16152a]",
};

/**
 * Tag / pill / chip primitive. Single source of truth for chip styling —
 * previously inlined in ProjectsSection, projects/[id], and StackSection with
 * subtly drifting class lists.
 */
export default function Chip({
  children,
  size = "sm",
  variant = "accentSoft",
}: ChipProps) {
  return (
    <span
      className={`inline-block font-mono rounded-sm border transition-colors ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
