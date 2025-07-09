import { useState, useEffect } from "react";

type Language = "en" | "ur";

export const useLanguage = (): [Language, () => void] => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("taleemTreeLang") as Language) || "en";
  });

  useEffect(() => {
    localStorage.setItem("taleemTreeLang", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ur" ? "rtl" : "ltr";
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ur" : "en"));
  };

  return [language, toggleLanguage];
};
