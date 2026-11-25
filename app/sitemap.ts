import type { MetadataRoute } from "next";
import { siteOrigin } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteOrigin },
    { url: `${siteOrigin}/sobre` },
    { url: `${siteOrigin}/politica-de-privacidade` },
  ];
}
