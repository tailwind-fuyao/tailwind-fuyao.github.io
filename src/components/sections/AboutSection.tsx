import { ScrollReveal, SectionHeading } from "@/components/ui";
import { ABOUT, STATS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <SectionHeading tagline={ABOUT.tagline} title={ABOUT.title} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="space-y-5">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="text-base leading-loose text-text-secondary">
                {p}
              </p>
            ))}
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.2}>
          <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
