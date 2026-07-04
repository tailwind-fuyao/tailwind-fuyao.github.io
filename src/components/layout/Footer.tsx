"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail } from "lucide-react";
import {
  NAV_ITEMS,
  NAV_ITEMS_EN,
  SITE_NAME,
  SITE_NAME_EN,
  FOOTER,
  FOOTER_EN,
  CONTACT_INFO,
} from "@/lib/constants";

export function Footer() {
  const pathname = usePathname();
  const path = (pathname ?? "/").replace(/\/+$/, "") || "/";
  const isEn = path === "/en" || path.startsWith("/en/");
  const homeHref = isEn ? "/en" : "/";
  const isHome = path === homeHref;
  // 子页面（如 /gallery/2025）的锚点需先回到首页再滚动。
  const anchorHref = (href: string) => (isHome ? href : `${homeHref}${href}`);

  const navItems = isEn ? NAV_ITEMS_EN : NAV_ITEMS;
  const siteName = isEn ? SITE_NAME_EN : SITE_NAME;
  const footer = isEn ? FOOTER_EN : FOOTER;
  const quickLinksTitle = isEn ? "Quick Links" : "快速链接";
  const contactTitle = isEn ? "Contact" : "联系方式";

  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/images/fuyao_logo.png"
                alt={siteName}
                width={36}
                height={36}
                className="brightness-0 invert"
              />
              <h3 className="text-lg font-bold">{siteName}</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {footer.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{quickLinksTitle}</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={anchorHref(item.href)}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{contactTitle}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail size={16} />
                {CONTACT_INFO.email}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-sm text-white/50">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
