"use client";

import { ScrollReveal, SectionHeading } from "@/components/ui";
import { MENTORS_SECTION, MENTORS } from "@/lib/constants";
import type { Mentor } from "@/types";

function MentorCard({ name, title, image }: Mentor) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 h-28 w-28 overflow-hidden rounded-full bg-bg-alt">
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-text-secondary/40">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <h3 className="text-base font-bold text-text md:text-lg">{name}</h3>
      <p className="mt-1.5 text-sm leading-snug text-text-secondary/70 md:text-base">{title}</p>
    </div>
  );
}

export function MentorsSection() {
  return (
    <section id="mentors" className="bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={MENTORS_SECTION.tagline} title={MENTORS_SECTION.title} />
        </ScrollReveal>

        <div className="mt-16 grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {MENTORS.filter((mentor) => mentor.image).map((mentor, i) => (
            <ScrollReveal key={mentor.name} delay={i * 0.05}>
              <MentorCard {...mentor} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
