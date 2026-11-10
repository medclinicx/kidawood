import {
  Article,
  articlesByCategory,
  CategorySlug,
  getLocalArticle,
  publishedArticles,
} from "./articles";

/**
 * Articles are read from the Sanity HTTP query API with plain fetch.
 * No Sanity SDK is used in the Next.js app.
 *
 * If NEXT_PUBLIC_SANITY_PROJECT_ID is unset, or a query fails, or
 * Sanity returns nothing, the local starter articles in
 * lib/articles.ts are used instead. The fallback is intentional so
 * the site builds and runs before a Sanity project exists.
 */

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const API_VERSION = "2024-01-01";

const ARTICLE_FIELDS = `{
  "slug": slug.current,
  title,
  excerpt,
  category,
  primaryKeyword,
  secondaryKeywords,
  publishedAt,
  updatedAt,
  readingMinutes,
  "image": imageUrl,
  imageAlt,
  intro,
  sections[]{ heading, paragraphs, subsections[]{ heading, paragraphs } },
  faqs[]{ q, a },
  sources[]{ label, url },
  status
}`;

async function sanityQuery<T>(groq: string, params: Record<string, string>): Promise<T | null> {
  if (!PROJECT_ID) return null;
  const url = new URL(
    `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`
  );
  url.searchParams.set("query", groq);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }
  try {
    const res = await fetch(url.toString(), { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const json = (await res.json()) as { result?: T };
    return json.result ?? null;
  } catch {
    return null;
  }
}

function usable(articles: Article[] | null): articles is Article[] {
  return Array.isArray(articles) && articles.length > 0;
}

export async function getArticles(): Promise<Article[]> {
  const remote = await sanityQuery<Article[]>(
    `*[_type == "article" && status == "published"] | order(publishedAt desc) ${ARTICLE_FIELDS}`,
    {}
  );
  if (usable(remote)) return remote;
  return publishedArticles();
}

export async function getArticlesByCategory(category: CategorySlug): Promise<Article[]> {
  const remote = await sanityQuery<Article[]>(
    `*[_type == "article" && status == "published" && category == $category] | order(publishedAt desc) ${ARTICLE_FIELDS}`,
    { category }
  );
  if (usable(remote)) return remote;
  return articlesByCategory(category);
}

export async function getArticle(slug: string): Promise<Article | null> {
  const remote = await sanityQuery<Article[]>(
    `*[_type == "article" && status == "published" && slug.current == $slug] ${ARTICLE_FIELDS}`,
    { slug }
  );
  if (usable(remote)) return remote[0];
  return getLocalArticle(slug) ?? null;
}

export async function getRelatedArticles(article: Article, count = 3): Promise<Article[]> {
  const all = await getArticles();
  const others = all.filter((a) => a.slug !== article.slug);
  const same = others.filter((a) => a.category === article.category);
  const rest = others.filter((a) => a.category !== article.category);
  return [...same, ...rest].slice(0, count);
}
