import { useSelector } from 'react-redux';
import en from "../translations/en.json";
import el from "../translations/el.json";

const translations = { en, el };

export const getLanguageList = () => Object.keys(translations);

export default function Lang(...args) {
  const { language } = useSelector(state => state.languageReducer);
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
