import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("financial-disclaimer");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/financial-disclaimer" },
};

export default function FinancialDisclaimerRoute() {
  return <LegalPage page={page} />;
}
