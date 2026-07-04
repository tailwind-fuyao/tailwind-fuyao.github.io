import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { SPONSORS_SECTION, SPONSORS } from "@/lib/constants";

export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-bg-alt py-20 md:py-28">
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

        <ScrollReveal>
          <div className="mt-14 text-center">
            <Link
              href="/sponsors"
              className="inline-flex items-center gap-1 rounded-full border border-primary/30 px-6 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              鸣谢赞助商
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
