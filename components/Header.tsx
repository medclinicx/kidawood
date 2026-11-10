import Link from "next/link";

const NAV = [
  { href: "/stocks", label: "Stocks" },
  { href: "/investing", label: "Investing" },
  { href: "/stock-management", label: "Stock Management" },
  { href: "/finance", label: "Finance" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="wordmark">
          Kida<span>wood</span>
        </Link>
        <nav className="main-nav" aria-label="Main">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
