"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "hi";

const STORAGE_KEY = "dpt-lang";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Read the saved preference after mount so server and client render the same initial HTML
  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === "hi") setLangState("hi");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Renders the English or Hindi variant based on the selected language. */
export function T({ en, hi }: { en: ReactNode; hi: ReactNode }) {
  const { lang } = useLang();
  return <>{lang === "hi" ? hi : en}</>;
}
