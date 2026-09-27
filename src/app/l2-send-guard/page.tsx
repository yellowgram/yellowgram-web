import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";
import { pageMetadata } from "@/lib/seo";
import { l2SendGuard, toolBySlug } from "@/lib/site";

const tool = toolBySlug("l2-send-guard");

export const metadata: Metadata = pageMetadata({
  title: l2SendGuard.name,
  description: l2SendGuard.summary,
  path: "/l2-send-guard",
});

export default function L2SendGuardPage() {
  return <ProductPage tool={tool} />;
}