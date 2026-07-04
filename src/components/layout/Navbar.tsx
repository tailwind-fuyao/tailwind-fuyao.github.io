"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NAV_ITEMS,
  NAV_ITEMS_EN,
  SITE_NAME,
  SITE_NAME_EN,
} from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const path = (pathname ?? "/").replace(/\/+$/, "") || "/";
  const isEn = path === "/en" || path.startsWith("/en/");

  const navItems = isEn ? NAV_ITEMS_EN : NAV_ITEMS;
  const siteName = isEn ? SITE_NAME_EN : SITE_NAME;
  const homeHref = isEn ? "/en" : "/";
  const isHome = path === homeHref;
  // 页面链接（如 /sponsors）原样使用；锚点在各自首页内直接滚动，
  // 在子页面（如 /gallery/2025）需先回到首页再滚动。
  const isPageLink = (href: string) => !href.startsWith("#");
  const resolveHref = (href: string) =>
    isPageLink(href) || isHome ? href : `${homeHref}${href}`;
  // 语言切换目标：中文页 → 英文页，英文页 → 中文页
  const altHref = isEn ? "/" : "/en";
  const altLabel = isEn ? "中文" : "EN";
  // 只有中文首页顶部有深色 Hero；其余页面（英文页、年度详情页等）始终用实底样式，
  // 否则透明导航栏的白字会看不见。
  const solid = scrolled || path !== "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={homeHref} className="flex items-center gap-2">
          <Image
            src="/images/fuyao_logo.png"
            alt={siteName}
            width={40}
            height={40}
            className={`transition-all ${solid ? "" : "brightness-0 invert"}`}
          />
          <span
            className={`text-xl font-bold transition-colors ${
              solid ? "text-primary" : "text-white"
            }`}
          >
            {siteName}
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const cls = `text-sm font-medium transition-colors hover:text-primary ${
                solid ? "text-text" : "text-white/90"
              }`;
              return (
                <li key={item.href}>
                  {isPageLink(item.href) ? (
                    <Link href={item.href} className={cls}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={resolveHref(item.href)} className={cls}>
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Language toggle */}
          <Link
            href={altHref}
            aria-label={isEn ? "切换到中文" : "Switch to English"}
            className={`rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
              solid
                ? "border-primary/40 text-primary hover:bg-primary hover:text-white"
                : "border-white/50 text-white hover:bg-white/10"
            }`}
          >
            {altLabel}
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden ${solid ? "text-text" : "text-white"}`}
            aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navItems.map((item) => {
              const cls =
                "block py-3 text-sm font-medium text-text transition-colors hover:text-primary";
              return (
                <li key={item.href}>
                  {isPageLink(item.href) ? (
                    <Link href={item.href} onClick={handleNavClick} className={cls}>
                      {item.label}
                    </Link>
                  ) : (
                    <a href={resolveHref(item.href)} onClick={handleNavClick} className={cls}>
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
