import { SET_LANGUAGE } from "../actionTypes";
import en from "../../translations/en";
import el from "../../translations/el";

const initialState = { locale: "el" };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, locale: action.payload };

    default:
      return state;
  }
};
