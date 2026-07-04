import Image from "next/image";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { SPONSORS_SECTION, SPONSORS } from "@/lib/constants";

export function SponsorsSection() {
  return (
    <section className="bg-bg-alt py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={SPONSORS_SECTION.tagline} title={SPONSORS_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-14 md:gap-20">
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex flex-col items-center gap-3"
              >
                <div className="relative h-20 w-20 overflow-hidden rounded-full bg-white shadow-sm">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <span className="text-xs text-text-secondary">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
