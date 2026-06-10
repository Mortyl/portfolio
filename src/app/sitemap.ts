import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const SITE_URL = "https://marcusortyl.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`,        changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/about`,   changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly",  priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE_URL}/projects/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
