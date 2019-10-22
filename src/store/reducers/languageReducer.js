import { SET_LANGUAGE } from "../actionTypes";

const initialState = { langKey: "en" };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, langKey: action.payload };

    default:
      return state;
  }
};
