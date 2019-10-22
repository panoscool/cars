import { store } from '../store/configureStore';
import en from "../translations/en.json";
import el from "../translations/el.json";

const translations = { en, el };

export const getLanguageList = () => Object.keys(translations);

export const lang = (translationKey) => {
  const { langKey } = store.getState().languageReducer;

  const translation = translations[langKey];

  const output = translation[translationKey];

  if (!translation || !output) {
    return translationKey
      .replace(/([A-Z])/g, '_$1')
      .trim()
      .toUpperCase();
  }

  return output;
}
