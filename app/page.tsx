import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { CATEGORIES } from "@/lib/articles";
import { getArticles } from "@/lib/sanity";

export default async function HomePage() {
  const articles = await getArticles();
  const latest = articles.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1>Stocks and stock management, explained in plain English</h1>
          <p>
            Kidawood is an information website for readers in the United States. We write about the
            stock market, about investing topics such as short selling, and about the software
            businesses use to manage physical stock and inventory.
          </p>
          <p>
            The word stock covers both subjects, so the site keeps them in separate sections.
            Market readers get company and investing guides. Business readers get inventory and
            barcode software guides. Each article starts with the short answer, then shows the
            reasoning and the sources behind it.
          </p>
          <div className="hero-links">
            <Link href="/blog" className="button">
              Read the latest articles
            </Link>
            <Link href="/about" className="button secondary">
              About Kidawood
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Two subjects, kept apart</h2>
          <p className="section-intro">
            Both pillars use the word stock. They are different topics, for different readers, and
            the site treats them that way.
          </p>
          <div className="pillars">
            <div className="pillar">
              <h3>The stock market</h3>
              <p>
                Is a company publicly traded, and what is its symbol. How investing works, from
                margin accounts to short selling, with the risks written out in full rather than
                added at the end.
              </p>
              <Link href="/stocks">Stock market articles</Link>
              {" · "}
              <Link href="/investing">Investing guides</Link>
            </div>
            <div className="pillar">
              <h3>Stock management</h3>
              <p>
                The software and barcode systems that help a pharmacy, grocery store, shop or
                warehouse count what it holds, find it quickly and reorder at the right time.
                Written for owners and managers comparing tools.
              </p>
              <Link href="/stock-management">Stock management articles</Link>
              {" · "}
              <Link href="/finance">Finance and legal topics</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Browse by section</h2>
          <p className="section-intro">Four sections cover the full range of the site.</p>
          <div className="category-cards">
            {CATEGORIES.map((category) => (
              <div className="category-card" key={category.slug}>
                <h3>
                  <Link href={category.path}>{category.name}</Link>
                </h3>
                <p>{category.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Latest articles</h2>
          <p className="section-intro">The most recent guides published on Kidawood.</p>
          <div className="card-grid">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <Link href="/blog">See all articles</Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="notice-box">
            <h2>How we publish</h2>
            <p>
              Articles are written by the Kidawood Editorial Team and checked against sources
              before they go live. For company and market facts we rely on public records such as
              SEC filings and regulator guidance, and each article lists the sources it used.
            </p>
            <p>
              When we get something wrong, we fix it and update the date on the page. The{" "}
              <Link href="/corrections-policy">corrections policy</Link> explains how that works,
              and the <Link href="/editorial-policy">editorial policy</Link> sets out how topics
              are chosen and written.
            </p>
            <p>
              Nothing on this site is personal financial advice. Articles explain how things work
              in general terms. A decision about your own money belongs with you and, where it
              matters, a licensed professional.
            </p>
          </div>
        </div>
      </section>

      <div className="disclaimer-strip">
        <div className="wrap">
          <p>
            Kidawood publishes general information only. It is not financial, investment, tax or
            legal advice, and Kidawood is not a registered investment adviser or broker. Read the{" "}
            <Link href="/financial-disclaimer">financial disclaimer</Link> before acting on anything
            you read here.
          </p>
        </div>
      </div>
    </>
  );
}
