"use client";

import { Building2, Handshake, Radar, Sparkles } from "lucide-react";
import { ScrollReveal, SectionAtmosphere, SectionHeading } from "@/components/ui";
import { useContent, useLang } from "@/components/LanguageProvider";

const partnerSignals = {
  zh: [
    { label: "合作状态", value: "开放招募中" },
    { label: "共建方向", value: "职业成长网络" },
    { label: "连接对象", value: "企业与机构" },
  ],
  tw: [
    { label: "合作狀態", value: "開放招募中" },
    { label: "共建方向", value: "職涯成長網路" },
    { label: "連接對象", value: "企業與機構" },
  ],
  en: [
    { label: "Status", value: "Open for partners" },
    { label: "Focus", value: "Career-growth network" },
    { label: "For", value: "Companies & orgs" },
  ],
} as const;

export function PartnersSection() {
  const { PARTNERS_SECTION } = useContent();
  const { lang } = useLang();

  return (
    <section id="sponsors" className="relative overflow-hidden py-28 md:py-40">
      <SectionAtmosphere variant="warm" />
      <div className="blob right-1/3 top-0 h-80 w-80 bg-amber-200/40" />
      <div className="blob blob-2 left-1/4 bottom-0 h-80 w-80 bg-rose-200/35" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={PARTNERS_SECTION.tagline} title={PARTNERS_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="partner-console glass glass-shine glass-interactive relative mx-auto grid overflow-hidden rounded-[2rem] p-6 md:grid-cols-[1.05fr_0.95fr] md:p-8">
            <div className="partner-radar" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="relative z-10 flex flex-col justify-between gap-8 rounded-[1.5rem] border border-white/60 bg-white/42 p-7 text-left backdrop-blur-2xl md:p-8">
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/30 to-sky-200/20 text-amber-600 shadow-[0_18px_42px_-26px_rgba(15,23,42,0.4)]">
                  <Sparkles size={26} />
                </div>
                <p className="text-lg leading-8 text-text-secondary md:text-xl md:leading-9">
                  {PARTNERS_SECTION.placeholder}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {partnerSignals[lang].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/64 bg-white/46 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)]"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary/70">{item.label}</p>
                    <p className="mt-2 text-sm font-bold text-ink">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-5 grid gap-4 md:ml-5 md:mt-0">
              {[Building2, Handshake, Radar].map((Icon, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-[1.5rem] border border-white/58 bg-white/34 p-5 text-left shadow-[0_18px_54px_-42px_rgba(15,23,42,0.45)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:border-sky-200/70 hover:bg-white/52"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-amber-200/20 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon size={23} />
                  </div>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/48">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary via-sky-300 to-gold"
                      style={{ width: `${68 + index * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
