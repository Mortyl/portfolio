interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint dark:text-[#555] whitespace-nowrap">
        {children}
      </span>
      <div className="flex-1 h-px bg-border dark:bg-[#2a2a28]" />
    </div>
  );
}
