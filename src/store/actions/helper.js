import { asyncActionStart, asyncActionFinish, asyncActionError } from "./asyncActions";
import { openSnackbar } from "./notificationActions";

export async function asyncAction(dispatch, actionCallback) {
  dispatch(asyncActionStart());

  try {
    await actionCallback();
    dispatch(asyncActionFinish());
  } catch (err) {
    const errorMessage = err.response.data.error
      ? err.response.data.error
      : "Πρόβλημα κατά την επικοινωνία με τον διακομιστή";

    dispatch(asyncActionError(errorMessage));
    dispatch(openSnackbar(errorMessage, "error"));
  }
}
