import { createContext, useContext, useState } from "react";
import en from "../translations/en";
import bn from "../translations/bn";

const LanguageContext = createContext();

function lookup(key, lang) {
  const keys = key.split(".");
  let value = lang;
  for (const k of keys) {
    if (value == null) return key;
    value = value[k];
  }
  return value ?? key;
}

export function LanguageProvider({ children }) {
  const saved = localStorage.getItem("googly_language") || "en";
  const [language, setLanguageState] = useState(saved);

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem("googly_language", lang);
  };

  const translations = language === "bn" ? bn : en;

  const t = (key, vars) => {
    let str = lookup(key, translations);
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, v);
      });
    }
    return str;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used within LanguageProvider");
  return ctx;
}
