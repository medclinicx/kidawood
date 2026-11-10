import type { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";
import { getCategory } from "@/lib/articles";

const category = getCategory("stocks");

export const metadata: Metadata = {
  title: "Stock Market: Company Stocks and Symbols",
  description:
    "Whether a company is publicly traded, what its stock symbol is, and how to check a listing yourself on SEC EDGAR and exchange directories.",
  alternates: { canonical: "/stocks" },
};

export default function StocksPage() {
  return <CategoryHub category={category} />;
}
