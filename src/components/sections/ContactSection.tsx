import { Mail } from "lucide-react";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { CONTACT_SECTION, CONTACT_INFO } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <SectionHeading tagline={CONTACT_SECTION.tagline} title={CONTACT_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mb-12 text-base leading-relaxed text-text-secondary">
            {CONTACT_SECTION.description}
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
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm text-primary hover:underline"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
