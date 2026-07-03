import Image from "next/image";
import { Mail } from "lucide-react";
import { NAV_ITEMS, SITE_NAME, FOOTER, CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image
                src="/images/fuyao_logo.png"
                alt={SITE_NAME}
                width={36}
                height={36}
                className="brightness-0 invert"
              />
              <h3 className="text-lg font-bold">{SITE_NAME}</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              {FOOTER.description}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">快速链接</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
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
            <h3 className="mb-4 text-lg font-bold">联系方式</h3>
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
            {FOOTER.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
