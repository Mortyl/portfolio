import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        surface: "#f7f7ff",
        border: "#e5e5e2",
        accent: {
          DEFAULT: "#4f46e5",
          light: "#ede9fe",
          muted: "#c4b5fd",
          dark: "#3730a3",
        },
      },
    },
  },
  plugins: [],
};
export default config;
