import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("corrections-policy");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/corrections-policy" },
};

export default function CorrectionsPolicyRoute() {
  return <LegalPage page={page} />;
}
