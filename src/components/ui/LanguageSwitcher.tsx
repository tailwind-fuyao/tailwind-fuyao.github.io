"use client";

import { motion, LayoutGroup } from "framer-motion";
import { useId } from "react";
import { useLang } from "@/components/LanguageProvider";
import { LANG_OPTIONS, type Lang } from "@/lib/i18n";

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export function LanguageSwitcher({
  variant = "light",
  size = "sm",
  className = "",
}: LanguageSwitcherProps) {
  const { lang, setLang } = useLang();
  const groupId = useId();

  const wrapperClass =
    variant === "light"
      ? "glass relative inline-flex items-center gap-0.5 rounded-full p-1"
      : "glass-dark relative inline-flex items-center gap-0.5 rounded-full p-1";

  const sizeClass = size === "md" ? "px-4 py-1.5 text-sm" : "px-3 py-1 text-xs";

  return (
    <LayoutGroup id={groupId}>
      <div className={`${wrapperClass} ${className}`}>
        {LANG_OPTIONS.map((opt) => {
          const active = opt.value === lang;
          const inactiveText = variant === "light" ? "text-text-secondary" : "text-white/65";
          const hoverText = variant === "light" ? "hover:text-text" : "hover:text-white";
          return (
            <motion.button
              key={opt.value}
              onClick={() => setLang(opt.value as Lang)}
              aria-label={opt.full}
              aria-current={active ? "true" : undefined}
              whileHover={{ scale: active ? 1 : 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className={`relative rounded-full font-semibold ${sizeClass} ${
                active ? "text-white" : `${inactiveText} ${hoverText}`
              }`}
            >
              {active && (
                <motion.span
                  layoutId={`lang-pill-${groupId}`}
                  className="absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/40"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10">{opt.short}</span>
            </motion.button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
