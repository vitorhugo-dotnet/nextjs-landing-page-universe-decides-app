import type { MetadataRoute } from "next";
import { locales } from "./translations";

const siteUrl = "https://the-universe-decides.ikkiartz.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(locales.map((item) => [item, `${siteUrl}/${item}`])),
    },
  }));
}
