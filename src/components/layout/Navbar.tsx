"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, LayoutGroup } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useContent } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/ui";

export function Navbar() {
  const { SITE_NAME, NAV_ITEMS, ARIA } = useContent();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(1120px,calc(100%-1.5rem))] -translate-x-1/2">
      <nav
        className={`glass-strong glass-shine nav-glass flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 md:px-5 ${
          scrolled ? "translate-y-1 shadow-2xl" : ""
        }`}
      >
        <motion.a
          href="/"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
          className="glass-pill nav-brand-pill relative z-10 flex items-center gap-2.5 whitespace-nowrap px-3 py-1.5 text-text"
        >
          <Image
            src="/images/fuyao_logo.png"
            alt={SITE_NAME}
            width={30}
            height={30}
            className="rounded-full ring-1 ring-white/80"
            style={{ width: 30, height: 30 }}
          />
          <span className="text-sm font-bold md:text-base">{SITE_NAME}</span>
        </motion.a>

        {/* Desktop nav with sliding glass hover indicator */}
        <LayoutGroup id="nav-hover-group">
          <ul
            className="relative z-10 hidden items-center gap-0.5 md:flex"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {NAV_ITEMS.map((item) => {
              const isHovered = hoveredHref === item.href;
              return (
                <li
                  key={item.href}
                  onMouseEnter={() => setHoveredHref(item.href)}
                  className="relative"
                >
                  {isHovered && (
                    <motion.span
                      layoutId="nav-hover-pill"
                      className="nav-hover-pill absolute inset-0 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                  <a
                    href={item.href}
                    className={`relative z-10 block rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors duration-300 ${
                      isHovered ? "text-primary" : "text-text/85"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>

        {/* Lang switcher (desktop) */}
        <div className="relative z-10 hidden items-center md:flex">
          <LanguageSwitcher variant="light" size="sm" />
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="relative z-10 rounded-full p-1.5 text-text transition-colors hover:bg-white/50 md:hidden"
          aria-label={mobileOpen ? ARIA.closeMenu : ARIA.openMenu}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </nav>

      {/* Mobile menu — glass dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="glass glass-shine mt-3 overflow-hidden rounded-3xl md:hidden"
        >
          <ul className="relative z-10 flex flex-col p-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-text transition-all duration-300 hover:bg-white/55 hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex justify-center border-t border-white/40 pt-3">
              <LanguageSwitcher variant="light" size="md" />
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
