import React, { createContext } from "react";
import { useSelector } from "react-redux";
import en from "./translations/en.json";
import el from "./translations/el.json";

export const LanguageContext = createContext({ lang: () => { }, languages: () => { } });

const translations = { en, el };


export default ({ children }) => {
  const { language } = useSelector(state => state.languageReducer);

  const getLanguageList = () => Object.keys(translations);

  function lang(...args) {
    const translation = translations[language];

    const key = String(args.shift());
    let output = translation[key];

    if (!translation || !output) {
      return key
        .replace(/([A-Z])/g, "_$1")
        .trim()
        .toUpperCase();
    }

    args.forEach(arg => {
      output = output.replace(/\{([^}]+)\}/, arg);
    });

    return output;
  }

  return (
    <LanguageContext.Provider value={{ lang: lang, languages: getLanguageList }}>
      {children}
    </LanguageContext.Provider>
  );
};
