import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import { FINANCE_CATEGORIES, formatDate, getCategory, publishedArticles } from "@/lib/articles";
import { getArticle, getRelatedArticles } from "@/lib/sanity";
import { SITE_URL } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return publishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Article not found" };
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
      images: [{ url: article.image, alt: article.imageAlt }],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
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
      <div className="wrap">
        <div className="article-column">
          <header className="article-head">
            <h1>{article.title}</h1>
            <p className="article-meta">
              <Link href={category.path}>{category.name}</Link> · By the Kidawood Editorial Team ·{" "}
              {article.readingMinutes} min read · Published {formatDate(article.publishedAt)} ·
              Updated {formatDate(article.updatedAt)}
            </p>
          </header>

          <p className="short-answer">{article.intro}</p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="featured-image"
            src={article.image}
            alt={article.imageAlt}
            width={1200}
            height={675}
          />

          <nav className="contents" aria-label="Contents">
            <h2>Contents</h2>
            <ol>
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
