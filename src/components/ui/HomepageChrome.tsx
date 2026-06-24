"use client";

import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useContent } from "@/components/LanguageProvider";

export function HomepageChrome() {
  const { CHROME } = useContent();
  const tickerItems = [...CHROME.ticker, ...CHROME.ticker];
  const [showTicker, setShowTicker] = useState(true);
  const cursorX = useMotionValue(-240);
  const cursorY = useMotionValue(-240);
  const cursorXSpring = useSpring(cursorX, { stiffness: 90, damping: 28, restDelta: 0.01 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 90, damping: 28, restDelta: 0.01 });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const syncPointer = (event: PointerEvent) => {
      cursorX.set(event.clientX - 180);
      cursorY.set(event.clientY - 180);
    };

    window.addEventListener("pointermove", syncPointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", syncPointer);
    };
  }, [cursorX, cursorY]);

  useEffect(() => {
    const syncTicker = () => {
      setShowTicker(window.scrollY < window.innerHeight * 0.45);
    };

    syncTicker();
    window.addEventListener("scroll", syncTicker, { passive: true });
    window.addEventListener("resize", syncTicker);

    return () => {
      window.removeEventListener("scroll", syncTicker);
      window.removeEventListener("resize", syncTicker);
    };
  }, []);

  return (
    <div className="homepage-chrome" aria-hidden="true">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.div className="cursor-light" style={{ x: cursorXSpring, y: cursorYSpring }} />
      <div className="global-tech-field" />
      <div className="global-depth-scanner">
        <span />
        <span />
        <span />
      </div>
      <div className="global-signal-mesh">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="data-rail data-rail-left">
        <span>{CHROME.rails.left}</span>
      </div>
      <div className="data-rail data-rail-right">
        <span>{CHROME.rails.right}</span>
      </div>
      <motion.div
        className="signal-ticker"
        animate={{ opacity: showTicker ? 0.78 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="signal-ticker-track">
          {tickerItems.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
