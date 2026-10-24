import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { entries } from "@/content/product";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(entries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  return entries[slug]?.meta ?? {};
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const entry = entries[slug];
  if (!entry) notFound();
  const Content = entry.Component;
  return <Content />;
}
