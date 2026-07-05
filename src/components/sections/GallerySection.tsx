import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import { GALLERY_SECTION, GALLERY_YEARS } from "@/lib/constants";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-bg py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={GALLERY_SECTION.tagline} title={GALLERY_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal>
          <p className="mx-auto mb-14 max-w-2xl text-center text-lg leading-relaxed text-text-secondary md:text-xl">
            {GALLERY_SECTION.summary}
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {GALLERY_YEARS.map((y, i) => (
            <ScrollReveal key={y.year} delay={i * 0.08}>
              <Link
                href={`/gallery/${y.year}`}
                className="group relative block aspect-[3/2] overflow-hidden rounded-2xl bg-primary-dark shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
              >
                {y.cover ? (
                  <Image
                    src={y.cover}
                    alt={y.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      y.available ? "" : "opacity-40"
                    }`}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
                )}

                {/* Dark gradient for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* "敬请期待" badge for years not yet published */}
                {!y.available && (
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary">
                    敬请期待
                  </span>
                )}

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <span className="text-4xl font-bold leading-none md:text-5xl">{y.year}</span>
                  <h3 className="mt-2 text-xl font-semibold md:text-2xl">{y.title}</h3>
                  <p className="mt-1.5 text-base text-white/80">{y.blurb}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-base font-medium">
                    {y.available ? "查看回顾" : "敬请期待"}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
