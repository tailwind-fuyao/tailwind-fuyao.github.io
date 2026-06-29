import { ScrollReveal, SectionHeading } from "@/components/ui";
import { TEAM_SECTION, TEAM } from "@/lib/constants";

export function TeamSection() {
  return (
    <section id="team" className="bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={TEAM_SECTION.tagline} title={TEAM_SECTION.title} />
        </ScrollReveal>

        {/* Core team roles */}
        <div className="mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.filter((g) => g.role !== "小组助教").map((group, i) => (
            <ScrollReveal key={group.role} delay={i * 0.08}>
              <div className="text-center">
                <h3 className="mb-2 text-sm font-semibold text-primary">{group.role}</h3>
                <p className="text-base text-text">
                  {group.members.join("、")}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* TAs */}
        {TEAM.filter((g) => g.role === "小组助教").map((group) => (
          <ScrollReveal key={group.role} delay={0.3}>
            <div className="text-center">
              <h3 className="mb-4 text-sm font-semibold text-primary">{group.role}</h3>
              <p className="mx-auto max-w-3xl text-sm leading-loose text-text-secondary">
                {group.members.join("、")}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
