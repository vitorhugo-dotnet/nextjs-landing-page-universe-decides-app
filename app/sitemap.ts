import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";
import { locales } from "./translations";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => [
    { url: `${siteUrl}/${locale}`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/${locale}/privacy-policy`, changeFrequency: "yearly", priority: 0.4 },
  ]);
}
