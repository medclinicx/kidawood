import type { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";
import { getCategory } from "@/lib/articles";

const category = getCategory("investing");

export const metadata: Metadata = {
  title: "Investing: How Trading and Investing Work",
  description:
    "Plain English investing guides: margin accounts, short selling, options and order types, with the risks of each written out in full.",
  alternates: { canonical: "/investing" },
};

export default function InvestingPage() {
  return <CategoryHub category={category} />;
}
