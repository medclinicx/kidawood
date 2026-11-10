import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { CATEGORIES, Category, CategorySlug } from "@/lib/articles";
import { getArticlesByCategory } from "@/lib/sanity";

const CATEGORY_FALLBACK_IMAGES: Record<CategorySlug, { src: string; alt: string }> = {
  stocks: {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=630&q=80",
    alt: "Stock market candlestick chart on a dark screen",
  },
  investing: {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=630&q=80",
    alt: "Stock market candlestick chart on a dark screen",
  },
  finance: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&h=630&q=80",
    alt: "US tax forms on a desk with a phone used as a calculator",
  },
  "stock-management": {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&h=630&q=80",
    alt: "Warehouse shelves lined with yellow picking bins of stock",
  },
};

export default async function CategoryHub({ category }: { category: Category }) {
  const articles = await getArticlesByCategory(category.slug);
  const siblings = CATEGORIES.filter((c) => c.slug !== category.slug);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{category.name}</h1>
          <p className="lede">{category.tagline}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <div className="prose">
            {category.intro.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="focus-list">
            <h2>What this section covers</h2>
            <ul>
              {category.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>{articles.length > 0 ? `${category.name} articles` : "Articles coming soon"}</h2>
          {articles.length > 0 ? (
            <>
              <p className="section-intro">
                {articles.length === 1
                  ? "The first article in this section is live. More are in preparation."
                  : `Guides published in the ${category.name} section so far.`}
              </p>
              <div className="card-grid">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="featured-image"
                src={CATEGORY_FALLBACK_IMAGES[category.slug].src}
                alt={CATEGORY_FALLBACK_IMAGES[category.slug].alt}
                width={1200}
                height={630}
                loading="lazy"
              />
              <p className="section-intro">
                No articles have been published in this section yet. New guides are added to the{" "}
                <Link href="/blog">blog index</Link> as they are finished.
              </p>
            </>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Other sections</h2>
          <div className="category-cards">
            {siblings.map((sibling) => (
              <div className="category-card" key={sibling.slug}>
                <h3>
                  <Link href={sibling.path}>{sibling.name}</Link>
                </h3>
                <p>{sibling.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
