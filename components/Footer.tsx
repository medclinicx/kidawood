import Link from "next/link";

const SECTIONS = [
  { href: "/stocks", label: "Stock Market" },
  { href: "/investing", label: "Investing" },
  { href: "/stock-management", label: "Stock Management" },
  { href: "/finance", label: "Finance and Legal" },
  { href: "/blog", label: "All articles" },
];

const LEGAL = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/financial-disclaimer", label: "Financial Disclaimer" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/advertising-disclosure", label: "Advertising Disclosure" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/corrections-policy", label: "Corrections Policy" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-mark">
            Kida<span>wood</span>
          </p>
          <p className="footer-note">
            Plain English guides on stocks, investing and stock management software, written for
            readers in the United States.
          </p>
        </div>
        <nav aria-label="Sections">
          <h2>Sections</h2>
          {SECTIONS.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <nav aria-label="Legal and policies">
          <h2>Legal and policies</h2>
          {LEGAL.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <p>
          Kidawood publishes general information only. It is not personal financial, investment,
          tax or legal advice, and Kidawood is not a registered investment adviser, broker or
          financial institution. See the{" "}
          <Link href="/financial-disclaimer">financial disclaimer</Link>.
        </p>
        <p>© {new Date().getFullYear()} Kidawood.com</p>
      </div>
    </footer>
  );
}
