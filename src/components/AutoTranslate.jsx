import { useEffect } from "react";
import { useLanguage, getTranslationLookup } from "../context/LanguageContext";

const SKIP = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA", "INPUT"]);

export default function AutoTranslate() {
  const { language } = useLanguage();
  useEffect(() => {
    if (language === "en") return undefined;
    const lookup = getTranslationLookup(language);
    const translate = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const nodes = [];
      let node;
      while ((node = walker.nextNode())) nodes.push(node);
      nodes.forEach((textNode) => {
        const parent = textNode.parentElement;
        if (!parent || SKIP.has(parent.tagName) || parent.closest(".languageMenu")) return;
        const raw = textNode.nodeValue;
        const trimmed = raw.trim();
        if (!trimmed || trimmed.length < 2 || /^\d+$/.test(trimmed)) return;
        const translated = lookup[trimmed];
        if (translated && translated !== trimmed) {
          textNode.nodeValue = raw.replace(trimmed, translated);
        }
      });
      document.querySelectorAll("input[placeholder], textarea[placeholder], [aria-label]").forEach((el) => {
        ["placeholder", "aria-label"].forEach((attr) => {
          const value = el.getAttribute(attr);
          if (value && lookup[value]) el.setAttribute(attr, lookup[value]);
        });
      });
    };
    translate();
    const observer = new MutationObserver(() => requestAnimationFrame(translate));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);
  return null;
}
