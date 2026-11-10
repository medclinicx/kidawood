import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import { getArticles } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Blog: All Articles",
  description:
    "Every article published on Kidawood: stocks, investing, stock management software and finance topics, in plain English.",
  alternates: { canonical: "/blog" },
};

export default async function BlogIndexPage() {
  const articles = await getArticles();

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Blog</h1>
          <p className="lede">
            All Kidawood articles in one place, newest first. Stock market and investing guides sit
            alongside stock management software guides, and each card shows its section so you can
            tell them apart at a glance.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="card-grid">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
