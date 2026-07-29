import type { MetadataRoute } from "next";

const siteUrl = "https://the-universe-decides.ikkiartz.chatgpt.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
