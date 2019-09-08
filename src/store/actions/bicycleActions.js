import {
  CREATE_BICYCLE,
  UPDATE_BICYCLE,
  DELETE_BICYCLE,
  FETCH_BICYCLE,
  FETCH_BICYCLES
} from "../actionTypes";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError
} from "./asyncActions";
import { asyncAction } from "./helper";
import bicycle from "../../mockApi";

export const createBicycle = data => async dispatch => {
  asyncAction(dispatch, async () => {
    const response = await bicycle.post("/bicycles", data);

    dispatch({ type: CREATE_BICYCLE, payload: response.data });
  });
};

export const updateBicycle = (id, data) => async dispatch => {
  dispatch(asyncActionStart());
  try {
    const response = await bicycle.put(`/bicycles/${id}`, data);

    dispatch({ type: UPDATE_BICYCLE, payload: response.data });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError(err.response.error));
  }
};

export const deleteBicycle = id => async dispatch => {
  dispatch(asyncActionStart());
  try {
    await bicycle.delete(`/bicycles/${id}`);

    dispatch({ type: DELETE_BICYCLE, payload: id });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError(err.response.error));
  }
};

export const fetchBicycle = id => async dispatch => {
  dispatch(asyncActionStart());
  try {
    const response = await bicycle.get(`/bicycles/${id}`);

    dispatch({ type: FETCH_BICYCLE, payload: response.data });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError(err.response.error));
  }
};

export const fetchBicycles = () => async dispatch => {
  dispatch(asyncActionStart());
  try {
    const response = await bicycle.get(`/bicycles`);

    dispatch({ type: FETCH_BICYCLES, payload: response.data });
    dispatch(asyncActionFinish());
  } catch (err) {
    dispatch(asyncActionError(err.response.error));
  }
};
