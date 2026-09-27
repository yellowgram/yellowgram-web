import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { pageMetadata } from "@/lib/seo";
import { keel, toolBySlug } from "@/lib/site";

const tool = toolBySlug("keel");

export const metadata: Metadata = pageMetadata({
  title: keel.name,
  description: keel.summary,
  path: "/keel",
});

export default function KeelPage() {
  return <ProductPage tool={tool} />;
}
