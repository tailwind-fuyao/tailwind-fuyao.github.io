interface SectionHeadingProps {
  tagline: string;
  title: string;
  centered?: boolean;
}

export function SectionHeading({ tagline, title, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-18 ${centered ? "text-center" : ""}`}>
      <span className="glass-pill mb-7 px-5 py-2.5 text-base font-semibold uppercase tracking-[0.18em] text-primary md:text-lg">
        {tagline}
      </span>
      <h2 className="text-balance mx-auto max-w-4xl bg-gradient-to-b from-ink via-text to-text-secondary bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
        {title}
      </h2>
      <div className={`gold-rule mt-6 h-px w-24 ${centered ? "mx-auto" : ""}`} />
      <div className={`heading-hud mt-4 ${centered ? "mx-auto" : ""}`} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
