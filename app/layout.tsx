import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kidawood — Stocks, Investing and Stock Management, in Plain English",
    template: "%s | Kidawood",
  },
  description:
    "Kidawood explains stocks, investing and stock management software in plain English for readers in the United States. General information only, not financial advice.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Kidawood",
    url: SITE_URL,
    title: "Kidawood — Stocks, Investing and Stock Management",
    description:
      "Plain English guides on company stocks, investing topics and stock management software.",
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kidawood",
  url: SITE_URL,
  description:
    "Kidawood is an English-language information website covering the stock market, investing topics and stock management software.",
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kidawood",
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: { "@type": "Organization", name: "Kidawood", url: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
