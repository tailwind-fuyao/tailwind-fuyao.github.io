"use client";

import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { useContent } from "@/components/LanguageProvider";
import { LanguageSwitcher } from "@/components/ui";

export function Footer() {
  const { SITE_NAME, NAV_ITEMS, FOOTER, CONTACT_INFO } = useContent();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-primary-dark via-[#172554] to-[#0c1a3d] text-white">
      <div className="blob left-10 top-10 h-96 w-96 bg-blue-500/30" />
      <div className="blob blob-2 right-20 bottom-10 h-80 w-80 bg-indigo-500/25" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="glass-dark mb-5 inline-flex items-center gap-2.5 rounded-full px-4 py-2">
              <Image
                src="/images/fuyao_logo.png"
                alt={SITE_NAME}
                width={28}
                height={28}
                className="rounded-full"
                style={{ width: 28, height: 28 }}
              />
              <h3 className="text-base font-bold">{SITE_NAME}</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {FOOTER.description}
            </p>
          </div>

          {/* Quick links + lang switcher */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              {FOOTER.quickLinks}
            </h3>
            <ul className="mb-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                {FOOTER.language}
              </h4>
              <LanguageSwitcher variant="dark" size="sm" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              {FOOTER.contactWay}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail size={16} />
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <MessageCircle size={16} />
                {CONTACT_INFO.wechat}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <p className="text-center text-sm text-white/50">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
