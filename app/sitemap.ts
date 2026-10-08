import type { MetadataRoute } from "next";
import { isPreview, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview) {
    return [];
  }

  const routes = [
    "",
    "/chi-siamo",
    "/servizi",
    "/clan-development-center",
    "/recruiting",
    "/contatti",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
