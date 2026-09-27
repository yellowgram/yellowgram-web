import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { pageMetadata } from "@/lib/seo";
import { hooksteel, toolBySlug } from "@/lib/site";

const tool = toolBySlug("hooksteel");

export const metadata: Metadata = pageMetadata({
  title: hooksteel.name,
  description: hooksteel.summary,
  path: "/hooksteel",
});

export default function HooksteelPage() {
  return <ProductPage tool={tool} />;
}
