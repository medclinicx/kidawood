import { publishedArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const articles = publishedArticles();
  const lastBuildDate =
    articles.length > 0
      ? new Date(
          articles
            .map((article) => article.updatedAt)
            .sort()
            .at(-1) + "T00:00:00Z",
        ).toUTCString()
      : new Date(0).toUTCString();

  const items = articles
    .map((article) => {
      const link = `${SITE_URL}/blog/${article.slug}`;
      const pubDate = new Date(article.publishedAt + "T00:00:00Z").toUTCString();
      return [
        "    <item>",
        `      <title>${escapeXml(article.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <pubDate>${pubDate}</pubDate>`,
        `      <description>${escapeXml(article.excerpt)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "  <channel>",
    "    <title>Kidawood</title>",
    `    <link>${SITE_URL}/</link>`,
    "    <description>Plain English guides on company stocks, investing topics and stock management software.</description>",
    "    <language>en-us</language>",
    `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
    items,
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
