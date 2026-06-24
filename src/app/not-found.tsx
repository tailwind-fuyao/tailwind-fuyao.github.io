"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";

const NOT_FOUND_COPY = {
  zh: {
    message: "抱歉，你访问的页面不存在",
    cta: "返回首页",
  },
  tw: {
    message: "抱歉，你訪問的頁面不存在",
    cta: "返回首頁",
  },
  en: {
    message: "Sorry, the page you are looking for does not exist.",
    cta: "Back home",
  },
} as const;

export default function NotFound() {
  const { lang } = useLang();
  const copy = NOT_FOUND_COPY[lang];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-2 text-6xl font-bold text-primary">404</h1>
      <p className="mb-8 text-lg text-text-secondary">{copy.message}</p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        {copy.cta}
      </Link>
    </div>
  );
}
