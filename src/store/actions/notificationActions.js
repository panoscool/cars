import { SNACKBAR_OPEN, SNACKBAR_CLOSE } from "../actionTypes";

export const openSnackbar = (message, variant) => ({
  type: SNACKBAR_OPEN,
  payload: { message, variant }
});

export const closeSnackbar = () => ({
  type: SNACKBAR_CLOSE
});
