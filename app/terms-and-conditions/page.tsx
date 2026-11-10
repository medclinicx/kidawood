import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { getLegalPage } from "@/lib/legal";

const page = getLegalPage("terms-and-conditions");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsRoute() {
  return <LegalPage page={page} />;
}
