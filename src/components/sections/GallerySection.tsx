"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollReveal, SectionAtmosphere, SectionHeading } from "@/components/ui";
import { useContent } from "@/components/LanguageProvider";

export function GallerySection() {
  const { GALLERY_SECTION, GALLERY_STATS, PAST_TIMELINE, ACTIVITY_PHOTOS } = useContent();

  return (
    <section id="gallery" className="relative overflow-hidden py-28 md:py-40">
      <SectionAtmosphere variant="bay" />
      <div className="blob left-1/4 top-1/4 h-96 w-96 bg-green-200/40" />
      <div className="blob blob-2 right-0 bottom-0 h-96 w-96 bg-blue-200/45" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <SectionHeading tagline={GALLERY_SECTION.tagline} title={GALLERY_SECTION.title} />
        </ScrollReveal>

        <ScrollReveal>
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg leading-8 text-text-secondary md:text-xl md:leading-9">
            {GALLERY_SECTION.summary}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass glass-shine glass-interactive rounded-3xl px-5 py-7 text-center transition duration-500 hover:-translate-y-1.5 hover:bg-white/58"
              >
                <div className="bg-gradient-to-b from-primary to-primary-light bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-text-secondary md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mx-auto mb-20 max-w-3xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="glass-pill px-6 py-2 text-base font-semibold uppercase tracking-[0.2em] text-primary md:text-lg">
                {GALLERY_SECTION.activityTimeline}
              </span>
            </div>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:-translate-x-px" />

            {PAST_TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={item.date + item.title} delay={i * 0.05}>
                  <div className="relative mb-8 last:mb-0 flex items-start gap-6 md:gap-0">
                    <div className="glass absolute left-3 top-2 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-br from-primary to-primary-light shadow-[0_0_12px_rgba(26,86,219,0.6)]" />
                    </div>

                    <div
                      className={`ml-10 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                      }`}
                    >
                      <div className="glass glass-shine glass-interactive rounded-3xl p-6 transition duration-500 hover:-translate-y-1.5 hover:bg-white/58">
                        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                          {item.date}
                        </span>
                        <h4 className="mt-2 text-lg font-bold text-text md:text-xl">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-base leading-7 text-text-secondary">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal>
          <div className="mb-10 text-center">
            <span className="glass-pill px-6 py-2 text-base font-semibold uppercase tracking-[0.2em] text-primary md:text-lg">
              {GALLERY_SECTION.highlights}
            </span>
          </div>
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITY_PHOTOS.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.06}>
              <motion.div
                initial={{ clipPath: "inset(12% 12% 12% 12% round 1rem)", opacity: 0 }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1rem)", opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="glass group relative aspect-[4/3] overflow-hidden rounded-2xl p-1.5 transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-6 top-5 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/80 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                  <p className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-base font-medium text-white transition-transform duration-500 group-hover:translate-y-0">
                    {photo.alt}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
