import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { SPONSORS_PAGE, TIER_SPONSORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "鸣谢赞助 — 扶摇计划",
  description: "感谢金牌、银牌赞助商对扶摇计划的鼎力支持。",
};

const TIER_BADGE: Record<string, string> = {
  gold: "bg-gradient-to-r from-amber-400 to-yellow-500",
  silver: "bg-gradient-to-r from-slate-300 to-slate-400",
};

export default function SponsorsPage() {
  return (
    <section className="bg-bg pb-24 pt-32 md:pb-36 md:pt-40">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <Link
            href="/#sponsors"
            className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          >
            <ArrowLeft size={16} />
            返回首页
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading tagline={SPONSORS_PAGE.tagline} title={SPONSORS_PAGE.title} />
        </ScrollReveal>

        <ScrollReveal>
          <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-text-secondary">
            {SPONSORS_PAGE.intro}
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {SPONSORS_PAGE.tierOrder.map((tier) => {
            const sponsors = TIER_SPONSORS.filter((s) => s.tier === tier);
            if (sponsors.length === 0) return null;
            return (
              <div key={tier}>
                <ScrollReveal>
                  <div className="mb-8 text-center">
                    <span
                      className={`inline-block rounded-full px-5 py-1.5 text-sm font-semibold text-white shadow-sm ${TIER_BADGE[tier]}`}
                    >
                      {SPONSORS_PAGE.tierLabels[tier]}
                    </span>
                  </div>
                </ScrollReveal>

                <div className="space-y-6">
                  {sponsors.map((s, i) => (
                    <ScrollReveal key={s.name} delay={i * 0.08}>
                      <div className="flex flex-col gap-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:flex-row md:items-center md:gap-8 md:p-8">
                        <div className="flex w-full shrink-0 items-center justify-center md:w-56">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={s.logo}
                            alt={s.name}
                            className="max-h-20 w-auto max-w-full object-contain"
                          />
                        </div>
                        <div className="md:border-l md:border-black/5 md:pl-8">
                          <h3 className="text-lg font-bold text-text">{s.name}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                            {s.description}
                          </p>
                          {s.website && (
                            <a
                              href={s.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                            >
                              访问官网
                              <ArrowUpRight size={15} />
                            </a>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
