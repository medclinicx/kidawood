import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const DEFAULT_SHARE_IMAGE =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=630&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kidawood: Stocks, Investing and Stock Management",
    template: "%s | Kidawood",
  },
  description:
    "Kidawood explains stocks, investing and stock management software in plain English for readers in the US. General information only, not financial advice.",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Kidawood RSS feed" }],
    },
  },
  openGraph: {
    type: "website",
    siteName: "Kidawood",
    url: SITE_URL,
    title: "Kidawood: Stocks, Investing and Stock Management",
    description:
      "Plain English guides on company stocks, investing topics and stock management software.",
    images: [
      {
        url: DEFAULT_SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Stock market candlestick chart on a dark screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_SHARE_IMAGE],
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kidawood",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
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
        <Analytics />
      </body>
    </html>
  );
}
