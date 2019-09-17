import React, { createContext } from "react";
import { useSelector } from "react-redux";
import en from "./translations/en.json";
import el from "./translations/el.json";

export const LanguageContext = createContext({ lang: () => {} });

const translations = { en, el };

export const getLanguageList = () => Object.keys(translations);

export default props => {
  const { language } = useSelector(state => state.languageReducer);

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
    <LanguageContext.Provider value={{ lang: lang }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
