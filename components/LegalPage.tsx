import { LegalPageContent } from "@/lib/legal";

export default function LegalPage({ page }: { page: LegalPageContent }) {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>{page.title}</h1>
          <p className="lede">{page.intro}</p>
          <p className="article-meta">Last updated {page.updated}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <div className="prose">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
