import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ScrollReveal, SectionHeading } from "@/components/ui";
import type { GalleryYear } from "@/lib/constants";

export function GalleryYearDetail({ data }: { data: GalleryYear }) {
  const stats = data.stats ?? [];
  const timeline = data.timeline ?? [];
  const photos = data.photos ?? [];

  return (
    <section className="bg-bg pb-24 pt-32 md:pb-36 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        {/* Back to index */}
        <ScrollReveal>
          <Link
            href="/#gallery"
            className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          >
            <ArrowLeft size={16} />
            返回历年成果
          </Link>
        </ScrollReveal>

        <ScrollReveal>
          <SectionHeading tagline="历年成果" title={data.title} />
        </ScrollReveal>

        {!data.available ? (
          <ScrollReveal>
            <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-primary/30 bg-white px-8 py-16 text-center">
              <p className="text-lg font-semibold text-text">内容整理中</p>
              <p className="mt-2 text-sm text-text-secondary">
                {data.year} 年度的回顾正在筹备，敬请期待。
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <>
            {data.summary && (
              <ScrollReveal>
                <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-text-secondary">
                  {data.summary}
                </p>
              </ScrollReveal>
            )}

            {/* Stats */}
            {stats.length > 0 && (
              <ScrollReveal delay={0.1}>
                <div className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="mb-1 text-3xl font-bold text-primary md:text-4xl">
                        {stat.value}
                      </div>
                      <div className="text-sm text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {/* Timeline — alternating left/right on desktop */}
            {timeline.length > 0 && (
              <div className="mx-auto mb-20 max-w-3xl">
                <ScrollReveal>
                  <h3 className="mb-12 text-center text-xl font-bold text-text">活动时间线</h3>
                </ScrollReveal>
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-primary/20 md:left-1/2 md:-translate-x-px" />

                  {timeline.map((item, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                      <ScrollReveal key={item.date} delay={i * 0.06}>
                        <div className="relative mb-10 last:mb-0 flex items-start gap-6 md:gap-0">
                          <div className="absolute left-3 top-1.5 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-white md:left-1/2" />

                          <div
                            className={`ml-8 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                              isLeft
                                ? "md:mr-auto md:pr-4 md:text-right"
                                : "md:ml-auto md:pl-4 md:text-left"
                            }`}
                          >
                            <span className="mb-1 inline-block text-sm font-semibold tracking-wide text-primary">
                              {item.date}
                            </span>
                            <h4 className="text-base font-bold text-text md:text-lg">
                              {item.title}
                            </h4>
                            <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Photos */}
            {photos.length > 0 && (
              <>
                <ScrollReveal>
                  <h3 className="mb-10 text-center text-xl font-bold text-text">精彩瞬间</h3>
                </ScrollReveal>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {photos.map((photo, i) => (
                    <ScrollReveal key={photo.src} delay={i * 0.08}>
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <p className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                          {photo.alt}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
