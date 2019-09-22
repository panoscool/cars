import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH, ASYNC_ACTION_ERROR } from "../actionTypes";

const initialState = { loading: false, error: null };

export default function (state = initialState, action) {
  switch (action.type) {
    case ASYNC_ACTION_START:
      return { loading: true };
    case ASYNC_ACTION_FINISH:
      return { loading: false };
    case ASYNC_ACTION_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
