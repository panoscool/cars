import { SET_THEME } from "../actionTypes";

const initialState = { type: "light" };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, type: action.payload }

    default:
      return state;
  }
};
