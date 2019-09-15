import { SET_LANGUAGE } from "../actionTypes";

export const setLanguage = data => ({
  locale: SET_LANGUAGE,
  payload: data
});
