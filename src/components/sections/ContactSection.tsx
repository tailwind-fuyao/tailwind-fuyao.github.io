import { Mail } from "lucide-react";
import type { ContactInfo } from "@/types";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { CONTACT_SECTION, CONTACT_INFO } from "@/lib/constants";

export function ContactSection({
  section = CONTACT_SECTION,
  info = CONTACT_INFO,
}: {
  section?: typeof CONTACT_SECTION;
  info?: ContactInfo;
} = {}) {
  return (
    <section id="contact" className="bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <SectionHeading tagline={section.tagline} title={section.title} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mb-12 text-base leading-relaxed text-text-secondary">
            {section.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mx-auto max-w-sm">
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Mail size={24} className="text-primary" />
              </div>
              <p className="text-sm font-semibold text-text">Email</p>
              <a
                href={`mailto:${info.email}`}
                className="text-sm text-primary hover:underline"
              >
                {info.email}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
