import type { MetadataRoute } from "next";
import { CATEGORIES, publishedArticles } from "@/lib/articles";
import { LEGAL_PAGES } from "@/lib/legal";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.9 },
    ...CATEGORIES.map((category) => ({
      url: `${SITE_URL}${category.path}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
    ...LEGAL_PAGES.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];

  const articlePages: MetadataRoute.Sitemap = publishedArticles().map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt + "T00:00:00Z"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages];
}
