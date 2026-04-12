import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        mono: ["DM Mono", "monospace"],
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        ink: "#1a1a1a",
        muted: "#6b6b6b",
        faint: "#a8a8a8",
        surface: "#f7f7f5",
        border: "#e5e5e2",
      },
    },
  },
  plugins: [],
};
export default config;
