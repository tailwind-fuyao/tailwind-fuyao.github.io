type SectionAtmosphereProps = {
  variant?: "bay" | "lab" | "network" | "signal" | "warm";
};

const variantClass: Record<NonNullable<SectionAtmosphereProps["variant"]>, string> = {
  bay: "section-atmosphere-bay",
  lab: "section-atmosphere-lab",
  network: "section-atmosphere-network",
  signal: "section-atmosphere-signal",
  warm: "section-atmosphere-warm",
};

export function SectionAtmosphere({ variant = "bay" }: SectionAtmosphereProps) {
  return (
    <div className={`section-atmosphere ${variantClass[variant]}`} aria-hidden="true">
      <div className="section-grid" />
      <div className="section-orbit section-orbit-a" />
      <div className="section-orbit section-orbit-b" />
      <div className="section-scanline" />
      <div className="section-energy-ribbon" />
      <div className="section-dots" />
      <div className="section-node-field">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
