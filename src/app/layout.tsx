import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notoSansSC } from "@/lib/fonts";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  CONTENT,
  DEFAULT_LANG,
  HTML_LANG,
  LANG_COOKIE_NAME,
  isLang,
  type Lang,
} from "@/lib/i18n";
import "./globals.css";

const OPEN_GRAPH_LOCALE: Record<Lang, string> = {
  zh: "zh_CN",
  tw: "zh_TW",
  en: "en_US",
};

function getRequestLang(cookieValue: string | undefined): Lang {
  return isLang(cookieValue) ? cookieValue : DEFAULT_LANG;
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const lang = getRequestLang(cookieStore.get(LANG_COOKIE_NAME)?.value);
  const content = CONTENT[lang];

  return {
    title: `${content.SITE_NAME} — ${content.HERO.title}`,
    description: content.SITE_DESCRIPTION,
    openGraph: {
      title: `${content.SITE_NAME} — ${content.HERO.title}`,
      description: content.SITE_DESCRIPTION,
      type: "website",
      locale: OPEN_GRAPH_LOCALE[lang],
      alternateLocale: Object.entries(OPEN_GRAPH_LOCALE)
        .filter(([localeLang]) => localeLang !== lang)
        .map(([, locale]) => locale),
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialLang = getRequestLang(cookieStore.get(LANG_COOKIE_NAME)?.value);

  return (
    <html lang={HTML_LANG[initialLang]} className={notoSansSC.variable}>
      <body className="font-sans antialiased">
        <LanguageProvider initialLang={initialLang}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
