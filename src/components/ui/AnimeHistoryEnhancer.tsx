"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

export function AnimeHistoryEnhancer() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const countNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-anime-count]"));

    countNodes.forEach((node, index) => {
      const target = Number(node.dataset.animeCount ?? "0");
      const suffix = node.dataset.animeSuffix ?? "";
      const counter = { value: 0 };

      animate(counter, {
        value: target,
        duration: 1200,
        delay: 180 + index * 110,
        ease: "out(3)",
        onUpdate: () => {
          node.textContent = `${Math.round(counter.value)}${suffix}`;
        },
      });
    });

    animate(".anime-story-card", {
      opacity: [0, 1],
      translateY: [24, 0],
      scale: [0.97, 1],
      duration: 820,
      delay: stagger(120, { start: 120 }),
      ease: "out(3)",
    });

    animate(".anime-year-node", {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 720,
      delay: stagger(90, { start: 280 }),
      ease: "out(3)",
    });

    animate(".anime-archive-card", {
      boxShadow: [
        "0 24px 80px rgba(15, 23, 42, 0.08)",
        "0 30px 95px rgba(14, 116, 144, 0.14)",
        "0 24px 80px rgba(15, 23, 42, 0.08)",
      ],
      duration: 5200,
      delay: stagger(260),
      ease: "inOut(2)",
      loop: true,
      alternate: true,
    });
  }, []);

  return null;
}
