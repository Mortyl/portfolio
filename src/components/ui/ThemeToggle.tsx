"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="w-12 h-6" />;

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle dark mode"
            className={`relative w-11 h-6 rounded-full border transition-colors duration-300 flex items-center ${
                isDark
                    ? "bg-[#2a2a28] border-[#444]"
                    : "bg-surface border-border"
            }`}
        >
            {/* Track icons */}
            <span className="absolute left-1.5 text-[9px]">🌙</span>
            <span className="absolute right-1.5 text-[9px]">☀️</span>

            {/* Thumb */}
            <span
                className={`absolute w-4 h-4 rounded-full bg-white dark:bg-[#f0ede6] shadow-sm transition-transform duration-300 ${
                    isDark ? "translate-x-5" : "translate-x-0.5"
                }`}
            />
        </button>
    );
}