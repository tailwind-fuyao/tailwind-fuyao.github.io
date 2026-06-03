"use client";

import { ScrollReveal, SectionAtmosphere, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function AboutSection() {
  const { ABOUT, STATS } = useContent();

  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-40">
      <SectionAtmosphere variant="bay" />
      <div className="blob left-0 top-1/4 h-96 w-96 bg-blue-200/45" />
      <div className="blob blob-2 right-0 top-10 h-80 w-80 bg-amber-200/40" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <ScrollReveal>
          <SectionHeading tagline={ABOUT.tagline} title={ABOUT.title} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="mx-auto max-w-4xl space-y-6">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-pretty text-lg leading-loose text-text-secondary md:text-xl md:leading-10">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass glass-shine glass-interactive rounded-2xl px-4 py-6 transition duration-500 hover:-translate-y-1.5 hover:bg-white/58"
              >
                <div className="bg-gradient-to-b from-primary-dark via-primary to-primary-light bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-3 text-sm font-medium text-text-secondary md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
