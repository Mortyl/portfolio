import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

// Fonts loaded via next/font: self-hosted, preconnected, zero render-blocking
// requests. Replaces the @import in globals.css. Exposed as CSS variables so
// Tailwind's fontFamily config can reference them.
const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://marcusortyl.dev";
const titleBase = `${siteConfig.name} — ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: titleBase,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: titleBase,
    description: siteConfig.description,
    url: SITE_URL,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_GB",
    // Drop a 1200x630 PNG at /public/og-image.png to enable rich social previews.
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: titleBase }],
  },
  twitter: {
    card: "summary_large_image",
    title: titleBase,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSerif.variable} ${dmMono.variable} ${outfit.variable}`}>
      <body className="bg-surface dark:bg-[#0f0e1a] transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
