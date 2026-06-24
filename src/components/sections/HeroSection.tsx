"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContent } from "@/components/LanguageProvider";
import { TextDecodeEffect } from "@/components/ui";

export function HeroSection() {
  const { CHROME, HERO } = useContent();
  const [leftTelemetry, rightTelemetry] = CHROME.telemetry;

  return (
    <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden md:min-h-[94svh]">
      <Image
        src="/images/hero-bay-ai.jpg"
        alt=""
        fill
        priority
        className="hero-photo object-cover object-[50%_46%]"
      />
      <div className="hero-vignette absolute inset-0" />
      <div className="hero-aurora absolute inset-0" />
      <div className="tech-grid absolute inset-0 opacity-20" />
      <div className="ai-network absolute inset-0" />
      <div className="data-beam left-[9%] top-[34%] hidden w-[28vw] rotate-[-8deg] md:block" />
      <div className="data-beam right-[8%] top-[60%] hidden w-[24vw] rotate-[10deg] md:block" />
      <div className="ai-node left-[17%] top-[32%]" />
      <div className="ai-node right-[18%] top-[38%]" />
      <div className="ai-node left-[28%] top-[66%]" />
      <div className="ai-node right-[31%] top-[63%]" />
      <div className="hero-signal-aperture" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -24, y: 18 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
        className="hero-telemetry hero-telemetry-left hidden lg:block"
      >
        <span className="hero-telemetry-kicker">{leftTelemetry.kicker}</span>
        <strong>{leftTelemetry.title}</strong>
        <small>{leftTelemetry.description}</small>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 24, y: -12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.68, ease: "easeOut" }}
        className="hero-telemetry hero-telemetry-right hidden lg:block"
      >
        <span className="hero-telemetry-kicker">{rightTelemetry.kicker}</span>
        <strong>{rightTelemetry.title}</strong>
        <small>{rightTelemetry.description}</small>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#f8fbff]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-12 pt-28 text-center md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="glass-dark mx-auto mb-8 inline-flex justify-center rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-white/95 md:text-base">
            {HERO.badge}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <TextDecodeEffect
            key={HERO.title}
            as="h1"
            text={HERO.title}
            className="text-balance mx-auto mb-7 max-w-4xl bg-gradient-to-b from-white via-white to-white/68 bg-clip-text text-5xl font-bold leading-[1.06] text-transparent drop-shadow-[0_22px_42px_rgba(0,0,0,0.35)] md:text-7xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
          className="gold-rule mx-auto mb-7 h-px w-40 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="text-pretty mx-auto max-w-2xl text-base leading-8 text-white/86 md:text-xl md:leading-9"
        >
          {HERO.subtitle}
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="glass-dark mt-12 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white/90 transition-all duration-500 hover:scale-105 hover:bg-white/20"
        >
          <span>{HERO.cta}</span>
          <span aria-hidden="true" className="animate-bounce">
            &darr;
          </span>
        </motion.a>
      </div>
    </section>
  );
}
