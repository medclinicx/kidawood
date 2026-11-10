import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Studio",
  description: "How Kidawood articles are managed in Sanity Studio.",
  alternates: { canonical: "/studio" },
  robots: { index: false, follow: false },
};

export default function StudioInfoPage() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Content Studio</h1>
          <p className="lede">Kidawood articles are written and edited in Sanity Studio.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 16 }}>
        <div className="wrap">
          <div className="prose">
            <p>
              Sanity is the content system behind this site. Editors work in Sanity Studio, a
              separate application that lives in the sanity folder of the project. The Studio is
              run locally or deployed by the site owner, and it is protected by a Sanity login, so
              there is no public editing page on this website.
            </p>
            <p>
              The website reads published articles from the Sanity content API. To connect the two,
              the project ID from the Sanity dashboard is set in the environment variable
              NEXT_PUBLIC_SANITY_PROJECT_ID, both for local work and in the hosting settings. Until
              that variable is set, the site runs on a small set of starter articles stored in the
              code, so the pages can be built and checked before the content account exists.
            </p>
            <p>
              Setup steps, including how to create the free Sanity project and where the Studio
              commands are run from, are written out in the project README.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
