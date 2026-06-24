"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GitBranch, Sparkles } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { HISTORY_CONTENT, historyGalleryImages } from "@/lib/programHistory";
import { ScrollReveal, SectionAtmosphere, SectionHeading } from "@/components/ui";

const previewCopy = {
  zh: {
    tagline: "历年成果",
    title: "从过往现场看到扶摇如何一步步长成系统",
    description:
      "这里不只是活动回顾，而是一条从 2024 验证、2025 成型到 2026 系统升级的成长叙事。每一年留下的导师经验、学员反馈和活动机制，都会成为下一年的基础设施。",
    cta: "进入历年成果",
    signal: "三年成长记录",
  },
  tw: {
    tagline: "歷年成果",
    title: "從過往現場看到扶搖如何一步步長成系統",
    description:
      "這裡不只是活動回顧，而是一條從 2024 驗證、2025 成型到 2026 系統升級的成長敘事。每一年留下的導師經驗、學員回饋和活動機制，都會成為下一年的基礎設施。",
    cta: "進入歷年成果",
    signal: "三年成長紀錄",
  },
  en: {
    tagline: "Program History",
    title: "Past moments show how Fuyao became a repeatable system",
    description:
      "This is more than an event recap. It is a three-year narrative from 2024 validation, to 2025 formation, to the 2026 system upgrade.",
    cta: "Explore program history",
    signal: "Three-year growth record",
  },
} as const;

export function HistoryPreviewSection() {
  const { lang } = useLang();
  const copy = previewCopy[lang];
  const history = HISTORY_CONTENT[lang];
  const previewImages = [historyGalleryImages[lang][0], historyGalleryImages[lang][2], historyGalleryImages[lang][7]];

  return (
    <section id="history-preview" className="relative overflow-hidden py-28 md:py-40">
      <SectionAtmosphere variant="signal" />
      <div className="data-beam left-[8%] top-[18%] w-[38%]" />
      <div className="data-beam right-[10%] bottom-[20%] w-[30%]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={copy.tagline} title={copy.title} />
          <p className="mx-auto -mt-10 mb-16 max-w-3xl text-center text-lg leading-9 text-text-secondary md:text-xl md:leading-10">
            {copy.description}
          </p>
        </ScrollReveal>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollReveal>
            <Link
              href="/history"
              className="history-preview-main glass glass-shine glass-interactive group block h-full overflow-hidden rounded-[2rem] p-6 md:p-8"
            >
              <div className="history-preview-orbit" aria-hidden="true" />
              <div className="history-preview-radar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="history-preview-circuit" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="glass-pill px-4 py-2 text-sm font-semibold text-primary">
                  <Sparkles size={16} />
                  {copy.signal}
                </div>
                <ArrowRight className="text-primary transition-transform group-hover:translate-x-1" size={24} />
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {history.years.map((yearItem, index) => (
                  <div key={yearItem.year} className="history-preview-year-card rounded-3xl bg-white/38 p-4 ring-1 ring-white/60 transition duration-500 group-hover:-translate-y-1 group-hover:bg-white/52">
                    <div className="text-4xl font-bold text-primary md:text-5xl">{yearItem.year}</div>
                    <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-text-secondary">
                      {history.timeline.phaseLabel} {index + 1}
                    </div>
                    <div className="mt-3 text-base font-bold text-text">{yearItem.stage}</div>
                    <div className="history-preview-signal mt-5" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                ))}
              </div>
              <div className="history-preview-photo-strip mt-7 grid gap-3 sm:grid-cols-3">
                {previewImages.map((image, index) => (
                  <div
                    key={`${image.year}-${image.src}`}
                    className="history-preview-photo group/photo relative h-32 overflow-hidden rounded-[1.25rem] bg-ink/10 ring-1 ring-white/60 sm:h-36"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 12vw, (min-width: 640px) 28vw, 88vw"
                      className="object-cover transition duration-700 group-hover/photo:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/12 to-transparent" />
                    <div className="absolute bottom-3 left-3 rounded-full border border-white/28 bg-white/16 px-3 py-1 text-xs font-black tracking-[0.16em] text-white backdrop-blur-xl">
                      {image.year}
                    </div>
                    <div className="history-preview-photo-lock absolute right-3 top-3 h-8 w-8 rounded-full border border-white/30 bg-white/14 backdrop-blur-xl" aria-hidden="true" />
                    <div
                      className="absolute inset-x-3 top-3 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70"
                      style={{ animationDelay: `${index * 0.35}s` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 text-lg font-bold text-primary">
                {copy.cta}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </ScrollReveal>

          <div className="grid gap-5">
            {history.years.map((yearItem, index) => (
              <ScrollReveal key={yearItem.year} delay={index * 0.08}>
                <Link
                  href={`/history#year-${yearItem.year}`}
                  className="history-preview-list-card glass glass-interactive group flex gap-5 rounded-3xl p-5 transition duration-500 hover:-translate-y-1.5 hover:bg-white/58"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/24 to-primary/8 text-primary transition-transform duration-500 group-hover:scale-110">
                    <GitBranch size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                      {yearItem.year} · {yearItem.name}
                    </div>
                    <h3 className="mt-2 text-xl font-bold leading-tight text-text md:text-2xl">{yearItem.headline}</h3>
                    <p className="mt-2 line-clamp-2 text-base leading-7 text-text-secondary">{yearItem.summary}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
