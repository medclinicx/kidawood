import type { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";
import { getCategory } from "@/lib/articles";

const category = getCategory("finance");

export const metadata: Metadata = {
  title: "Finance and Legal: Advisers, Insurance, Stock Law",
  description:
    "Financial advisers, stock fraud attorneys, stock throughput insurance, stock plan administration and donating stock, explained in plain terms.",
  alternates: { canonical: "/finance" },
};

export default function FinancePage() {
  return <CategoryHub category={category} />;
}
