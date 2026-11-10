import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap not-found">
      <h1>Page not found</h1>
      <p>The page you asked for does not exist on Kidawood, or it has been moved.</p>
      <p>
        Try the <Link href="/blog">blog index</Link> for the full list of articles, or go back to
        the <Link href="/">home page</Link>.
      </p>
    </div>
  );
}
