"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  CONTENT,
  DEFAULT_LANG,
  HTML_LANG,
  LANG_COOKIE_NAME,
  type ContentShape,
  type Lang,
} from "@/lib/i18n";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  content: ContentShape;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = LANG_COOKIE_NAME;

export function LanguageProvider({
  children,
  initialLang = DEFAULT_LANG,
}: {
  children: ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = HTML_LANG[lang];
      document.title = `${CONTENT[lang].SITE_NAME} · ${CONTENT[lang].HERO.title}`;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
      document.cookie = `${LANG_COOKIE_NAME}=${lang}; path=/; max-age=31536000; samesite=lax`;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, l);
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, content: CONTENT[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

export function useContent() {
  return useLang().content;
}
