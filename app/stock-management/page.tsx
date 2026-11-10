import type { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";
import { getCategory } from "@/lib/articles";

const category = getCategory("stock-management");

export const metadata: Metadata = {
  title: "Stock Management: Inventory and Barcode Software",
  description:
    "Guides to stock and inventory management software: barcode systems, pharmacy and grocery inventory, warehouse stock control and reorder points.",
  alternates: { canonical: "/stock-management" },
};

export default function StockManagementPage() {
  return <CategoryHub category={category} />;
}
