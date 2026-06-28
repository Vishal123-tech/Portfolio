import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projects } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/skills", "/certifications", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
