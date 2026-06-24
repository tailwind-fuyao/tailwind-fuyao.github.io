"use client";

import { useEffect, useMemo, useState } from "react";

type TextDecodeEffectProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "span";
  delay?: number;
};

const ZH_DECODE_POOL = "扶摇计划湾区职业成长导师学员未来2026";
const EN_DECODE_POOL = "FUYAOPROGRAMBAYAREAAICAREER2026";
const PRESERVED = new Set([" ", "\n", "\t", "，", "。", "、", "：", "；", "·", "“", "”", "-", "—", "(", ")", "/", "+"]);

function pickDecodePool(text: string) {
  return /[\u4e00-\u9fff]/.test(text) ? ZH_DECODE_POOL : EN_DECODE_POOL;
}

function randomGlyph(pool: string) {
  return pool[Math.floor(Math.random() * pool.length)] ?? "";
}

export function TextDecodeEffect({ text, className, as: Tag = "span", delay = 180 }: TextDecodeEffectProps) {
  const chars = useMemo(() => Array.from(text), [text]);
  const decodePool = useMemo(() => pickDecodePool(text), [text]);
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    let intervalId: number | undefined;
    const totalFrames = 22;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        frame += 1;
        const resolvedCount = Math.ceil((frame / totalFrames) * chars.length);

        setDisplayText(
          chars
            .map((char, index) => {
              if (PRESERVED.has(char)) return char;
              return index < resolvedCount ? char : randomGlyph(decodePool);
            })
            .join(""),
        );

        if (frame >= totalFrames) {
          window.clearInterval(intervalId);
          setDisplayText(text);
        }
      }, 34);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [chars, decodePool, delay, text]);

  return (
    <Tag aria-label={text} className={className}>
      <span aria-hidden="true">{displayText}</span>
    </Tag>
  );
}
