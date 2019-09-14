import { SNACKBAR_OPEN, SNACKBAR_CLOSE } from "../actionTypes";

const initialState = {
  open: false,
  message: "",
  variant: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SNACKBAR_OPEN:
      return {
        ...state,
        open: true,
        message: action.payload.message,
        variant: action.payload.variant
      };
    case SNACKBAR_CLOSE:
      return { ...state, open: false, message: "", variant: "" };
    default:
      return state;
  }
};
