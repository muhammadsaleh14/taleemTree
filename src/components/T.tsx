import { useMemo } from "react";
import type { JSX } from "react/jsx-runtime";

interface TProps {
  en: string;
  ur: string;
  lang: "en" | "ur";
  className?: string;
  as?: keyof JSX.IntrinsicElements; // e.g., 'h2', 'p', 'button'
}

const T = ({ en, ur, lang, className, as: Component = "span" }: TProps) => {
  const text = lang === "ur" ? ur : en;
  const fontClass = useMemo(
    () => (lang === "ur" ? "font-noto-arabic" : ""),
    [lang]
  );

  return (
    <Component className={`${fontClass} ${className || ""}`}>{text}</Component>
  );
};

export default T;
