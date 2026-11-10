import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { CATEGORIES, Category } from "@/lib/articles";
import { getArticlesByCategory } from "@/lib/sanity";

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
            <p className="section-intro">
              No articles have been published in this section yet. New guides are added to the{" "}
              <Link href="/blog">blog index</Link> as they are finished.
            </p>
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
