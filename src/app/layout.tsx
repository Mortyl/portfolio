import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Frontend Developer`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} — Frontend Developer`,
    description: siteConfig.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-surface dark:bg-[#0f0e1a] transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
