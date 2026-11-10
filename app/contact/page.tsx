import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Kidawood",
  description:
    "How to reach the Kidawood Editorial Team about corrections, feedback and topic requests.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Contact</h1>
          <p className="lede">
            The Kidawood Editorial Team reads reader messages about the articles on this site.
            Three kinds of message are most useful.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <div className="prose">
            <h2>Corrections</h2>
            <p>
              If an article contains a fact that is wrong or out of date, tell us which page it is
              on, what it says, and what the correct position is, with a source if you have one.
              Confirmed errors are fixed under the{" "}
              <Link href="/corrections-policy">corrections policy</Link>, and the updated date on
              the article changes when the fix is published.
            </p>
            <h2>Feedback on an article</h2>
            <p>
              Notes on clarity are welcome. If a guide explains something badly, skips a step or
              uses a term without defining it, say which part lost you. Articles are revised when
              readers keep tripping over the same place.
            </p>
            <h2>Topic requests</h2>
            <p>
              You can suggest a company, an investing topic or a type of stock management software
              for a future article. Requests are read and grouped with similar ones, and the{" "}
              <Link href="/editorial-policy">editorial policy</Link> governs what gets written.
              Suggesting a topic does not guarantee an article, and Kidawood does not accept
              payment to write about, or to leave out, any company or product.
            </p>
            <h2>What we cannot help with</h2>
            <p>
              We cannot advise on your own investments, review your portfolio, or help with an
              account at a broker or a software supplier. For personal financial questions, speak
              to a licensed adviser. For an account problem, contact the firm that holds the
              account.
            </p>
            <div className="notice-box">
              <h3>How to reach us</h3>
              <p>
                Reader contact for Kidawood is being set up alongside the site launch. Until the
                contact address is published here, this page is the record of what the team handles
                and how corrections are dealt with. Please do not send personal financial
                information, account numbers or passwords to any address claiming to speak for
                Kidawood unless it is listed on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
