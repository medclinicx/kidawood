import Link from "next/link";
import { Article, formatDate, getCategory } from "@/lib/articles";

export default function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.category);
  return (
    <article className="card">
      <Link href={`/blog/${article.slug}`} className="card-image">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image} alt={article.imageAlt} width={640} height={360} />
      </Link>
      <div className="card-body">
        <p className="card-meta">
          <Link href={category.path}>{category.name}</Link> · {formatDate(article.publishedAt)} ·{" "}
          {article.readingMinutes} min read
        </p>
        <h3>
          <Link href={`/blog/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.excerpt}</p>
      </div>
    </article>
  );
}
