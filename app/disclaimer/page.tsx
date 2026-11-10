import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("disclaimer");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerRoute() {
  return <LegalPage page={page} />;
}
