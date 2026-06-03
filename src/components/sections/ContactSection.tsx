"use client";

import { Mail, MessageCircle, Radio, Send, ShieldCheck } from "lucide-react";
import { ScrollReveal, SectionAtmosphere, SectionHeading } from "@/components/ui";
import { useContent, useLang } from "@/components/LanguageProvider";

const contactConsoleCopy = {
  zh: {
    eyebrow: "连接通道",
    title: "选择一个入口 把你的下一步发给我们",
    body: "学员、导师、志愿者和合作伙伴都可以从这里进入扶摇网络。",
    nodes: ["学员咨询", "导师加入", "志愿协作"],
  },
  tw: {
    eyebrow: "連接通道",
    title: "選擇一個入口 把你的下一步發給我們",
    body: "學員、導師、志工和合作夥伴都可以從這裡進入扶搖網路。",
    nodes: ["學員諮詢", "導師加入", "志工協作"],
  },
  en: {
    eyebrow: "Connection Channel",
    title: "Pick a channel and send us your next step",
    body: "Mentees, mentors, volunteers, and partners can all enter the Fuyao network from here.",
    nodes: ["Mentee inquiry", "Mentor onboarding", "Volunteer ops"],
  },
} as const;

export function ContactSection() {
  const { CONTACT_SECTION, CONTACT_INFO } = useContent();
  const { lang } = useLang();
  const consoleCopy = contactConsoleCopy[lang];

  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-40">
      <SectionAtmosphere variant="lab" />
      <div className="blob left-10 top-10 h-96 w-96 bg-blue-200/45" />
      <div className="blob blob-2 right-10 bottom-10 h-80 w-80 bg-pink-200/35" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={CONTACT_SECTION.tagline} title={CONTACT_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-text-secondary md:text-xl md:leading-9">
            {CONTACT_SECTION.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="contact-console glass glass-shine relative mx-auto grid overflow-hidden rounded-[2rem] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div className="contact-orbit" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <div className="relative z-10 rounded-[1.5rem] border border-white/58 bg-white/36 p-7 text-left backdrop-blur-2xl md:p-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]">
                <Radio size={15} />
                {consoleCopy.eyebrow}
              </div>
              <h3 className="text-3xl font-black leading-tight text-ink md:text-4xl">
                {consoleCopy.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">
                {consoleCopy.body}
              </p>

              <div className="mt-8 grid gap-3">
                {consoleCopy.nodes.map((node, index) => (
                  <div
                    key={node}
                    className="group flex items-center gap-3 rounded-2xl border border-white/56 bg-white/38 px-4 py-3 transition duration-500 hover:-translate-y-1 hover:bg-white/52"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-black text-primary">
                      0{index + 1}
                    </span>
                    <span className="font-bold text-text">{node}</span>
                    <ShieldCheck className="ml-auto text-primary/70 transition-transform duration-500 group-hover:scale-110" size={18} />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-5 grid gap-5 md:ml-5 md:mt-0">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="glass glass-shine glass-interactive group flex flex-col justify-between gap-8 rounded-[1.5rem] p-7 text-left transition duration-500 hover:-translate-y-1.5 hover:bg-white/58"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Mail size={26} />
                  </div>
                  <Send className="text-primary/60 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-text md:text-base">
                    {CONTACT_SECTION.emailLabel}
                  </p>
                  <span className="mt-3 block break-all text-lg font-bold text-primary">
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </a>

              <div className="glass glass-shine glass-interactive group flex flex-col justify-between gap-8 rounded-[1.5rem] p-7 text-left transition duration-500 hover:-translate-y-1.5 hover:bg-white/58">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 text-primary transition-transform duration-500 group-hover:scale-110">
                    <MessageCircle size={26} />
                  </div>
                  <Radio className="text-primary/60 transition duration-500 group-hover:scale-110" size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-text md:text-base">
                    {CONTACT_SECTION.wechatLabel}
                  </p>
                  <span className="mt-3 block text-lg font-bold text-primary">@{CONTACT_INFO.wechat}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
