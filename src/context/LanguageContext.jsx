import { createContext, useContext, useState } from "react";

import commonTranslations from "./translations/common";
import heritageTranslations from "./translations/heritage";
import cultureTranslations from "./translations/culture";
import cultureDetailTranslations from "./translations/cultureDetail";
import foodTranslations from "./translations/food";
import craftsTranslations from "./translations/crafts";
import exploreTranslations from "./translations/explore";

const LanguageContext = createContext(null);

/*
============================================================
SUPPORTED LANGUAGES
============================================================
*/

const languages = [
  "en",
  "hi",
  "bn",
  "ta",
  "te",
  "mr",
  "fr",
  "es",
];

/*
============================================================
BUILD ALL TRANSLATIONS
============================================================

Common translations:
    t.nav
    t.home
    t.footer
    etc.

Page translations:
    t.heritage
    t.culture
    t.cultureDetail
    t.food
    t.crafts
    t.explore
*/


function deepMerge(base, override) {
  const output = { ...base };
  Object.entries(override || {}).forEach(([key, value]) => {
    if (value && typeof value === "object" && !Array.isArray(value) && base?.[key] && typeof base[key] === "object" && !Array.isArray(base[key])) {
      output[key] = deepMerge(base[key], value);
    } else if (value !== undefined && value !== null) {
      output[key] = value;
    }
  });
  return output;
}

const translations = {};

languages.forEach((language) => {
  const common = commonTranslations[language] || {};

  translations[language] = {
    /*
    ========================================================
    COMMON
    ========================================================
    */

    ...deepMerge(commonTranslations.en || {}, common),

    /*
    ========================================================
    PAGE TRANSLATIONS — English is the safe fallback so no
    page becomes blank when a translated key is missing.
    ========================================================
    */

    heritage: deepMerge(heritageTranslations.en || {}, heritageTranslations[language] || {}),
    culture: deepMerge(cultureTranslations.en || {}, cultureTranslations[language] || {}),
    cultureDetail: deepMerge(cultureDetailTranslations.en || {}, cultureDetailTranslations[language] || {}),
    food: deepMerge(foodTranslations.en || {}, foodTranslations[language] || {}),
    crafts: deepMerge(craftsTranslations.en || {}, craftsTranslations[language] || {}),
    explore: deepMerge(exploreTranslations.en || {}, exploreTranslations[language] || {}),
  };
});

/*
============================================================
LANGUAGE PROVIDER
============================================================
*/


export function getTranslationLookup(language = "en") {
  const result = {};
  const walk = (en, translated) => {
    if (typeof en === "string" && typeof translated === "string") { result[en.trim()] = translated; return; }
    if (!en || typeof en !== "object" || !translated || typeof translated !== "object") return;
    Object.keys(en).forEach((key) => walk(en[key], translated[key] ?? en[key]));
  };
  const source = translations.en;
  const target = translations[language] || source;
  walk(source, target);
  const extra = {
    "Real-time Travel Safety Intelligence": {hi:"रीयल-टाइम यात्रा सुरक्षा इंटेलिजेंस",bn:"রিয়েল-টাইম ভ্রমণ নিরাপত্তা বুদ্ধিমত্তা",ta:"நிகழ்நேர பயண பாதுகாப்பு நுண்ணறிவு",te:"రియల్-టైమ్ ప్రయాణ భద్రతా సమాచారం",mr:"रिअल-टाइम प्रवास सुरक्षा माहिती",fr:"Intelligence de sécurité voyage en temps réel",es:"Inteligencia de seguridad de viaje en tiempo real"},
    "Normal travel recommended": {hi:"सामान्य यात्रा की सलाह",bn:"স্বাভাবিক ভ্রমণের পরামর্শ",ta:"சாதாரண பயணம் பரிந்துரைக்கப்படுகிறது",te:"సాధారణ ప్రయాణం సిఫార్సు",mr:"सामान्य प्रवासाची शिफारस",fr:"Voyage normal recommandé",es:"Viaje normal recomendado"},
    "Waiting for Admin Approval": {hi:"एडमिन की मंज़ूरी का इंतज़ार",bn:"অ্যাডমিন অনুমোদনের অপেক্ষায়",ta:"நிர்வாகி ஒப்புதலுக்காக காத்திருக்கிறது",te:"అడ్మిన్ ఆమోదం కోసం వేచి ఉంది",mr:"अॅडमिनच्या मंजुरीची प्रतीक्षा",fr:"En attente de l'approbation de l'administrateur",es:"Esperando la aprobación del administrador"}
  };
  Object.entries(extra).forEach(([en, map]) => { if (map[language]) result[en] = map[language]; });
  return result;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    const savedLanguage = localStorage.getItem("language");

    /*
    --------------------------------------------------------
    Use saved language if it is supported
    --------------------------------------------------------
    */

    if (
      savedLanguage &&
      translations[savedLanguage]
    ) {
      return savedLanguage;
    }

    /*
    --------------------------------------------------------
    Default language
    --------------------------------------------------------
    */

    return "en";
  });

  /*
  ==========================================================
  CHANGE LANGUAGE
  ==========================================================
  */

  const setLanguage = (newLanguage) => {
    /*
    --------------------------------------------------------
    Prevent unsupported languages
    --------------------------------------------------------
    */

    if (!translations[newLanguage]) {
      console.warn(
        `Unsupported language: ${newLanguage}`
      );

      return;
    }

    /*
    --------------------------------------------------------
    Update React state
    --------------------------------------------------------
    */

    setLanguageState(newLanguage);

    /*
    --------------------------------------------------------
    Save language
    --------------------------------------------------------
    */

    localStorage.setItem(
      "language",
      newLanguage
    );
  };

  /*
  ==========================================================
  CURRENT TRANSLATIONS
  ==========================================================
  */

  const value = {
    /*
    Current language
    Example:
      "en"
      "hi"
      "bn"
    */

    language,

    /*
    Function used by language selector
    */

    setLanguage,

    /*
    All translations for current language

    Example:

    t.nav
    t.home
    t.heritage
    t.culture
    t.cultureDetail
    t.food
    t.crafts
    t.explore
    */

    t: translations[language],
  };

  /*
  ==========================================================
  PROVIDER
  ==========================================================
  */

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/*
============================================================
USE LANGUAGE
============================================================
*/

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
}

/*
============================================================
DEFAULT EXPORT
============================================================
*/

export default LanguageContext;