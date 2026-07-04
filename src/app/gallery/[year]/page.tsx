import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GALLERY_YEARS, getGalleryYear } from "@/lib/constants";
import { GalleryYearDetail } from "@/components/sections/GalleryYearDetail";

// 每往 GALLERY_YEARS 追加一届，这里就会自动生成对应的静态页面。
export function generateStaticParams() {
  return GALLERY_YEARS.map((y) => ({ year: y.year }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string }>;
}): Promise<Metadata> {
  const { year } = await params;
  const data = getGalleryYear(year);
  return {
    title: data ? `${data.title} — 扶摇计划` : "历年成果 — 扶摇计划",
  };
}

export default async function GalleryYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const data = getGalleryYear(year);
  if (!data) notFound();
  return <GalleryYearDetail data={data} />;
}
