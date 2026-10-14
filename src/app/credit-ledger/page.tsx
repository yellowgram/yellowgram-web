import type { Metadata } from "next";
import { UnavailablePage } from "@/components/UnavailablePage";

export const metadata: Metadata = {
  title: "Not available",
  robots: { index: false, follow: false },
};

export default function CreditLedgerPage() {
  return <UnavailablePage />;
}
