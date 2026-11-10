import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import {
  CATEGORIES,
  FINANCE_CATEGORIES,
  formatDate,
  getCategory,
  publishedArticles,
} from "@/lib/articles";
import { getArticle, getArticles, getRelatedArticles } from "@/lib/sanity";
import { SITE_URL } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORY_SHARE_IMAGES: Record<string, { url: string; alt: string }> = {
  stocks: {
    url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=630&q=80",
    alt: "Stock market candlestick chart on a dark screen",
  },
  investing: {
    url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=630&q=80",
    alt: "Stock market candlestick chart on a dark screen",
  },
  finance: {
    url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=630&q=80",
    alt: "US tax forms on a desk with a phone used as a calculator",
  },
  "stock-management": {
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=630&q=80",
    alt: "Warehouse shelves lined with yellow picking bins of stock",
  },
};

export async function generateStaticParams() {
  return publishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article not found" };
  const shareImage = CATEGORY_SHARE_IMAGES[article.category];
  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.primaryKeyword, ...article.secondaryKeywords],
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/blog/${article.slug}`,
      images: [
        {
          url: shareImage.url,
          width: 1200,
          height: 630,
          alt: shareImage.alt,
        },
      ],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      images: [shareImage.url],
    },
  };
}

function anchorId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const related = await getRelatedArticles(article);
  const latest = (await getArticles()).filter((a) => a.slug !== article.slug).slice(0, 3);
  const showDisclaimer = FINANCE_CATEGORIES.includes(article.category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { "@type": "Organization", name: "Kidawood Editorial Team", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Kidawood", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
    inLanguage: "en-US",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `${SITE_URL}${category.path}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: article.title,
        item: `${SITE_URL}/blog/${article.slug}`,
      },
    ],
  };

  const faqSchema =
    article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }
      : null;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="wrap">
        <div className="article-layout">
          <div className="article-column">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              {" / "}
              <Link href="/blog">Blog</Link>
              {" / "}
              <Link href={category.path}>{category.name}</Link>
            </nav>

            <header className="article-head">
            <h1>{article.title}</h1>
            <p className="article-meta">
              <Link href={category.path}>{category.name}</Link> · By the Kidawood Editorial Team ·{" "}
              {article.readingMinutes} min read · Published {formatDate(article.publishedAt)} ·
              Updated {formatDate(article.updatedAt)}
            </p>
          </header>

          <p className="short-answer">
            <span className="short-answer-label">Short answer</span>
            {article.intro}
          </p>

          {article.takeaways && article.takeaways.length > 0 && (
            <div className="takeaways">
              <h2>Key takeaways</h2>
              <ul>
                {article.takeaways.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="featured-image"
            src={article.image}
            alt={article.imageAlt}
            width={1200}
            height={675}
          />

          <div className="prose">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 id={anchorId(section.heading)}>{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {section.subsections?.map((sub) => (
                  <div key={sub.heading}>
                    <h3>{sub.heading}</h3>
                    {sub.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                ))}
              </section>
            ))}

            {article.faqs.length > 0 && (
              <section>
                <h2 id="frequently-asked-questions">Frequently asked questions</h2>
                {article.faqs.map((faq) => (
                  <div className="faq-item" key={faq.q}>
                    <h3>{faq.q}</h3>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </section>
            )}

            {article.sources.length > 0 && (
              <section>
                <h2 id="sources">Sources and references</h2>
                <ul className="sources-list">
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="author-box">
            <h2>About the author</h2>
            <p>
              This article was written and checked by the Kidawood Editorial Team. Kidawood does
              not use named individual authors for its guides. Research is based on the public
              sources listed on this page, and articles are updated when facts change. See the{" "}
              <Link href="/editorial-policy">editorial policy</Link> for how articles are prepared.
            </p>
          </div>

          {showDisclaimer && (
            <div className="article-disclaimer">
              <p>
                This article is general information about how investing works. It is not financial
                advice and it is not a recommendation to buy, sell or short any stock. Investing
                involves risk, including the possible loss of the money invested, and short selling
                can lose more than the amount at the start. Read the full{" "}
                <Link href="/financial-disclaimer">financial disclaimer</Link>.
              </p>
            </div>
          )}
          </div>

          <aside className="sidebar">
            <nav className="side-card" aria-label="On this page">
              <h2>On this page</h2>
              <ol className="side-contents">
                {article.sections.map((section) => (
                  <li key={section.heading}>
                    <a href={`#${anchorId(section.heading)}`}>{section.heading}</a>
                  </li>
                ))}
                {article.faqs.length > 0 && (
                  <li>
                    <a href="#frequently-asked-questions">Frequently asked questions</a>
                  </li>
                )}
                {article.sources.length > 0 && (
                  <li>
                    <a href="#sources">Sources and references</a>
                  </li>
                )}
              </ol>
            </nav>

            {latest.length > 0 && (
              <div className="side-card">
                <h2>Latest articles</h2>
                {latest.map((item) => (
                  <div className="side-latest-item" key={item.slug}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt="" width={56} height={42} />
                    <div>
                      <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                      <span className="side-latest-date">{formatDate(item.publishedAt)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="side-card">
              <h2>Browse sections</h2>
              <ul className="side-sections">
                {CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <Link href={c.path}>{c.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="side-card">
              <h2>About Kidawood</h2>
              <p>
                Kidawood is an information website for readers in the United States. It covers the
                stock market and stock management software.
              </p>
              <p>
                <Link href="/about">More about Kidawood</Link>
              </p>
            </div>

            <div className="side-card side-disclaimer">
              <h2>Disclaimer</h2>
              <p>
                Everything published on Kidawood is general information only, not financial advice.
                For the full wording, read the{" "}
                <Link href="/financial-disclaimer">financial disclaimer</Link>.
              </p>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="related">
            <h2>Related articles</h2>
            <div className="card-grid">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
