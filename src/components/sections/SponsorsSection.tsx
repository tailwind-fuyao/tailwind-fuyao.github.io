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
          <div className="grid grid-cols-5 items-start gap-2 sm:gap-6 md:gap-10">
            {SPONSORS.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex flex-col items-center gap-2 md:gap-3"
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white shadow-sm sm:h-16 sm:w-16 md:h-20 md:w-20">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <span className="text-center text-[11px] leading-tight text-text-secondary sm:text-sm md:text-base">
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
