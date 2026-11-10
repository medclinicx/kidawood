import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Kidawood",
  description:
    "What Kidawood is, what it covers, who writes it, and the standards its articles are held to.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>About Kidawood</h1>
          <p className="lede">
            Kidawood is an English-language information website for readers in the United States.
            It covers two subjects that share one word: the stock market, and the stock a business
            keeps on its shelves.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <div className="prose">
            <p>
              The market side of the site answers the questions readers actually type into a search
              box. Is this company publicly traded. What is its stock symbol. How does short selling
              work, and what can go wrong with it. The business side covers stock management:
              barcode systems, inventory software, and how pharmacies, grocery stores and
              warehouses keep track of what they hold.
            </p>
            <h2>Who writes it</h2>
            <p>
              Articles are written by the Kidawood Editorial Team rather than under individual
              names. Each article is checked against public sources before it is published, and
              the sources are listed at the foot of the page so a reader can follow the same trail.
              The <Link href="/editorial-policy">editorial policy</Link> describes how topics are
              chosen, how facts are checked and how updates are handled.
            </p>
            <h2>What Kidawood is not</h2>
            <p>
              Kidawood is not a broker, an investment adviser or a financial institution, and it
              does not manage money, sell securities or give personal advice. Articles explain how
              things work in general terms. They are a starting point for your own reading, not a
              substitute for a licensed professional who knows your situation. The{" "}
              <Link href="/financial-disclaimer">financial disclaimer</Link> sets this out in full.
            </p>
            <h2>Corrections</h2>
            <p>
              Facts change, and mistakes happen. When an article is wrong we correct it, note the
              change and update the date on the page. Readers can flag an error through the{" "}
              <Link href="/contact">contact page</Link>. The{" "}
              <Link href="/corrections-policy">corrections policy</Link> explains the process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
