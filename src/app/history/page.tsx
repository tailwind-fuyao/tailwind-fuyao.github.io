"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, GitBranch, Home, Network, Route } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { AnimeHistoryEnhancer } from "@/components/ui/AnimeHistoryEnhancer";
import { TextDecodeEffect } from "@/components/ui";
import { historyGalleryImages, HISTORY_CONTENT } from "@/lib/programHistory";

const pageNavCopy = {
  zh: {
    home: "回到首页",
    mentor: "导师网络",
    gallery: "活动现场",
    consoleEyebrow: "往期活动导航",
    consoleTitle: "从这里快速进入每一期的项目现场",
    consoleBody: "把三年的成长脉络做成一条可跳转的叙事路径：先看验证，再看成型，最后进入 2026 的系统化升级。",
    jumpPrefix: "进入",
    yearSuffix: "年度回顾",
    signal: "成长记录已连接",
    bayLabel: "湾区成长节点",
    bayNodes: ["斯坦福", "帕洛阿尔托", "山景城", "库比蒂诺", "圣何塞"],
  },
  tw: {
    home: "回到首頁",
    mentor: "導師網路",
    gallery: "活動現場",
    consoleEyebrow: "往期活動導航",
    consoleTitle: "從這裡快速進入每一期的專案現場",
    consoleBody: "把三年的成長脈絡做成一條可跳轉的敘事路徑：先看驗證，再看成型，最後進入 2026 的系統化升級。",
    jumpPrefix: "進入",
    yearSuffix: "年度回顧",
    signal: "成長紀錄已連接",
    bayLabel: "灣區成長節點",
    bayNodes: ["史丹佛", "帕洛阿爾托", "山景城", "庫比蒂諾", "聖荷西"],
  },
  en: {
    home: "Back home",
    mentor: "Mentor network",
    gallery: "Event gallery",
    consoleEyebrow: "Past Programs",
    consoleTitle: "Jump directly into each program year",
    consoleBody:
      "A navigable narrative path across three years: validation, formation, then the 2026 system upgrade.",
    jumpPrefix: "Open",
    yearSuffix: "review",
    signal: "Growth record online",
    bayLabel: "Bay Area signal path",
    bayNodes: ["Stanford", "Palo Alto", "Mountain View", "Cupertino", "San Jose"],
  },
} as const;

function splitMetricValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);

  return {
    count: match?.[1] ?? "0",
    suffix: match?.[2] ?? "",
  };
}

export default function HistoryPage() {
  const { lang } = useLang();
  const content = HISTORY_CONTENT[lang];
  const galleryImages = historyGalleryImages[lang];
  const navCopy = pageNavCopy[lang];

  return (
    <div className="history-page relative overflow-hidden pt-28">
      <AnimeHistoryEnhancer />
      <div className="history-page-field" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="history-depth-orbit" aria-hidden="true">
        <span />
        <span />
      </div>

      <section className="relative overflow-hidden px-6 pb-24 pt-16 md:pb-32 md:pt-24">
        <div className="section-atmosphere section-atmosphere-bay" aria-hidden="true">
          <div className="section-grid" />
          <div className="section-orbit section-orbit-a" />
          <div className="section-orbit section-orbit-b" />
          <div className="section-scanline" />
          <div className="section-dots" />
        </div>
        <div className="history-constellation" aria-hidden="true" />
        <div className="data-beam left-[6%] top-[22%] w-[42%]" />
        <div className="data-beam right-[7%] top-[58%] w-[34%]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="glass-pill mb-8 px-5 py-2.5 text-base font-semibold uppercase tracking-[0.18em] text-primary md:text-lg">
                {content.hero.eyebrow}
              </span>
              <TextDecodeEffect
                key={content.hero.title}
                as="h1"
                text={content.hero.title}
                className="text-balance max-w-5xl bg-gradient-to-b from-ink via-text to-text-secondary bg-clip-text text-4xl font-bold leading-[1.08] text-transparent sm:text-5xl md:text-7xl"
              />
              <p className="mt-8 max-w-3xl text-pretty text-lg leading-9 text-text-secondary md:text-2xl md:leading-10">
                {content.hero.description}
              </p>
              <div className="history-bay-strip mt-8">
                <div className="history-bay-label">{navCopy.bayLabel}</div>
                <div className="history-bay-nodes">
                  {navCopy.bayNodes.map((node) => (
                    <span key={node}>{node}</span>
                  ))}
                </div>
              </div>
              <div className="mt-10 grid gap-4 sm:flex sm:flex-wrap">
                <Link
                  href="/"
                  className="glass glass-shine glass-interactive inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-primary"
                >
                  {navCopy.home}
                  <ArrowRight size={18} />
                </Link>
                <Link href="/#mentors" className="glass-pill min-h-12 justify-center px-6 py-3 text-base font-semibold text-text">
                  {navCopy.mentor}
                </Link>
                <Link href="/#gallery" className="glass-pill min-h-12 justify-center px-6 py-3 text-base font-semibold text-text">
                  {navCopy.gallery}
                </Link>
              </div>
            </div>

            <div className="history-hero-shell glass glass-shine rounded-[2rem] p-4 md:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/gallery/boxphoto47.jpg"
                  alt={content.hero.imageAlt}
                  fill
                  priority
                  loading="eager"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-slate-950/12 to-white/10" />
                <div className="history-holo-ribbon" aria-hidden="true" />
                <div className="history-hero-metrics absolute right-5 top-5 hidden w-48 rounded-3xl border border-cyan-100/18 bg-slate-950/36 p-4 text-white backdrop-blur-2xl md:block">
                  <div className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100/74">
                    {content.hero.arcEyebrow}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {content.years.map((yearItem) => (
                      <div key={yearItem.year} className="rounded-2xl bg-white/10 p-2 text-center">
                        <div className="text-lg font-bold text-white">{yearItem.year}</div>
                        <div className="mt-1 h-1 rounded-full bg-cyan-200/70" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100/80">
                    {content.hero.arcEyebrow}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white md:text-3xl">{content.hero.arcTitle}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {content.overviewStats.map(({ value, label }) => {
              const metric = splitMetricValue(value);

              return (
              <div key={label} className="glass glass-shine rounded-3xl p-7 text-center">
                <div
                  className="bg-gradient-to-b from-primary-dark via-primary to-primary-light bg-clip-text text-5xl font-bold text-transparent"
                  data-anime-count={metric.count}
                  data-anime-suffix={metric.suffix}
                >
                  {value}
                </div>
                <div className="mt-3 text-base font-medium text-text-secondary">{label}</div>
              </div>
              );
            })}
          </div>

          <div className="history-narrative-spine glass glass-shine mt-8 overflow-hidden rounded-[2rem] p-5 md:p-7">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-bold text-primary">
                  <Route size={16} />
                  {content.narrative.eyebrow}
                </div>
                <h2 className="text-balance bg-gradient-to-b from-ink via-text to-text-secondary bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-5xl">
                  {content.narrative.title}
                </h2>
              </div>

              <div className="history-storyline-grid">
                {content.narrative.chapters.map((chapter, index) => (
                  <Link
                    key={chapter.year}
                    href={`#year-${chapter.year}`}
                    className="history-story-card anime-story-card group relative overflow-hidden rounded-[1.5rem] border border-white/58 bg-white/46 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:bg-white/62"
                  >
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-bold text-white shadow-lg shadow-primary/25">
                          {index + 1}
                        </span>
                        <span className="text-sm font-bold text-primary">{chapter.label}</span>
                      </div>
                      <span className="text-sm font-bold tracking-[0.18em] text-text-secondary">{chapter.year}</span>
                    </div>
                    <h3 className="text-xl font-bold leading-snug text-text md:text-2xl">{chapter.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text-secondary md:text-base">{chapter.body}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                      {navCopy.jumpPrefix} {chapter.year}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="history-command-center glass glass-shine mt-8 grid gap-6 overflow-hidden rounded-[2rem] p-5 md:grid-cols-[0.9fr_1.1fr] md:p-7">
            <div className="glass-dark rounded-[1.5rem] p-6 text-white">
              <div className="history-console-radar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-100/15 bg-white/8 px-4 py-2 text-sm font-bold text-cyan-100 backdrop-blur-xl transition hover:bg-white/14"
                >
                  <Home size={15} />
                  {navCopy.home}
                </Link>
                <div className="flex rounded-full border border-cyan-100/12 bg-white/8 p-1 backdrop-blur-xl">
                  {content.years.map((yearItem) => (
                    <Link
                      key={yearItem.year}
                      href={`#year-${yearItem.year}`}
                      className="rounded-full px-3 py-1.5 text-xs font-bold text-cyan-100/82 transition hover:bg-white/12 hover:text-white"
                    >
                      {yearItem.year}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-4 py-2 text-sm font-bold text-primary">
                <CalendarDays size={16} />
                {navCopy.consoleEyebrow}
              </div>
              <h2 className="text-balance text-3xl font-bold leading-tight text-white md:text-4xl">
                {navCopy.consoleTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-200/78 md:text-lg">{navCopy.consoleBody}</p>
              <div className="history-orbit-map mt-7" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {content.years.map((yearItem) => (
                  <div key={yearItem.year} className="rounded-2xl border border-cyan-100/12 bg-white/8 p-3">
                    <div className="text-2xl font-bold text-cyan-100">{yearItem.year}</div>
                    <div className="mt-1 h-1 rounded-full bg-gradient-to-r from-cyan-300/70 to-amber-200/60" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {content.years.map((yearItem, index) => (
                <Link
                  key={yearItem.year}
                  href={`#year-${yearItem.year}`}
                  className="history-year-node anime-year-node glass glass-interactive group relative overflow-hidden rounded-[1.5rem] p-5"
                >
                  <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-4xl font-bold text-primary">{yearItem.year}</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      {content.timeline.phaseLabel} {index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-lg font-bold text-text">{yearItem.stage}</p>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">{yearItem.headline}</p>
                  <div className="history-node-signal mt-5" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    {navCopy.jumpPrefix} {yearItem.year} {navCopy.yearSuffix}
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="section-atmosphere section-atmosphere-network" aria-hidden="true">
          <div className="section-grid" />
          <div className="section-orbit section-orbit-a" />
          <div className="section-orbit section-orbit-b" />
          <div className="section-scanline" />
          <div className="section-dots" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="glass-pill mb-7 px-5 py-2.5 text-base font-semibold uppercase tracking-[0.18em] text-primary md:text-lg">
              {content.timeline.eyebrow}
            </span>
            <h2 className="text-balance mx-auto max-w-4xl bg-gradient-to-b from-ink via-text to-text-secondary bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
              {content.timeline.title}
            </h2>
          </div>

          <div className="history-timeline-stack relative space-y-10">
            <div className="history-timeline-packet" aria-hidden="true" />
            <div className="history-tracing-beam" aria-hidden="true">
              <span />
            </div>
            {content.years.map((item, index) => (
              <article
                id={`year-${item.year}`}
                key={item.year}
                className="history-archive-card anime-archive-card glass glass-shine spotlight-card scroll-mt-32 grid overflow-hidden rounded-[2rem] p-5 md:grid-cols-[0.9fr_1.1fr] md:p-6"
              >
                <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/74 via-slate-950/10 to-white/10" />
                  <div className="history-archive-decode" aria-hidden="true">
                    <span />
                    <span />
                  </div>
                  <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/18 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl">
                    {item.stage}
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <div className="text-6xl font-bold text-white md:text-7xl">{item.year}</div>
                    <div className="mt-1 text-xl font-semibold text-white/86">{item.name}</div>
                  </div>
                </div>

                <div className="p-4 md:p-8">
                  <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                    <GitBranch size={18} />
                    {content.timeline.phaseLabel} {index + 1}
                  </div>
                  <h3 className="text-balance text-3xl font-bold leading-tight text-text md:text-4xl">
                    {item.headline}
                  </h3>
                  <p className="mt-5 text-lg leading-9 text-text-secondary">{item.summary}</p>

                  <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {item.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl bg-white/34 p-4 text-center ring-1 ring-white/50">
                        <div className="text-3xl font-bold text-primary">{metric.value}</div>
                        <div className="mt-1 text-sm text-text-secondary">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-7 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-base leading-7 text-text-secondary">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_12px_rgba(26,86,219,0.45)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.topics.map((topic) => (
                      <span key={topic} className="glass-pill px-3 py-1.5 text-xs font-semibold text-primary">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="section-atmosphere section-atmosphere-signal" aria-hidden="true">
          <div className="section-grid" />
          <div className="section-scanline" />
          <div className="section-dots" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="glass-pill mb-7 px-5 py-2.5 text-base font-semibold uppercase tracking-[0.18em] text-primary md:text-lg">
                {content.impact.eyebrow}
              </span>
              <h2 className="text-balance bg-gradient-to-b from-ink via-text to-text-secondary bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
                {content.impact.title}
              </h2>
              <p className="mt-6 text-lg leading-9 text-text-secondary md:text-xl md:leading-10">
                {content.impact.description}
              </p>
            </div>

            <div className="grid gap-5">
              {content.impactStories.map((story) => (
                <div key={story.title} className="glass glass-shine glass-interactive rounded-3xl p-7">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/24 to-primary/8 text-primary">
                    <Network size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-text">{story.title}</h3>
                  <p className="mt-3 text-base leading-8 text-text-secondary">{story.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="glass-pill mb-7 px-5 py-2.5 text-base font-semibold uppercase tracking-[0.18em] text-primary md:text-lg">
              {content.memory.eyebrow}
            </span>
            <h2 className="text-balance mx-auto max-w-4xl bg-gradient-to-b from-ink via-text to-text-secondary bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
              {content.memory.title}
            </h2>
          </div>

          <div className="history-memory-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((photo) => {
              const caption = photo.alt;

              return (
              <div key={photo.src} className="history-memory-tile glass group relative aspect-[4/3] overflow-hidden rounded-2xl p-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={photo.src}
                    alt={caption}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-6 top-5 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/18 px-3 py-1 text-xs font-bold text-white opacity-0 backdrop-blur-xl transition-opacity duration-500 group-hover:opacity-100">
                    {photo.year}
                  </div>
                  <div className="history-memory-frame" aria-hidden="true">
                    <span />
                    <span />
                  </div>
                  <p className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-base font-medium text-white transition-transform duration-500 group-hover:translate-y-0">
                    {caption}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
