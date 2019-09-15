import {
  CREATE_BICYCLE,
  UPDATE_BICYCLE,
  DELETE_BICYCLE,
  FETCH_BICYCLE,
  FETCH_BICYCLES
} from "../actionTypes";
import { asyncAction } from "./helper";
import { openSnackbar } from "./notificationActions";
import bicycle from "../../mockApi";

export const createBicycle = data => async dispatch => {
  asyncAction(dispatch, async () => {
    const response = await bicycle.post("/bicycles", data);

    dispatch({ type: CREATE_BICYCLE, payload: response.data });
    dispatch(openSnackbar("Your classified has been created", "success"));
  });
};

export const updateBicycle = (id, data) => async dispatch => {
  asyncAction(dispatch, async () => {
    const response = await bicycle.put(`/bicycles/${id}`, data);

    dispatch({ type: UPDATE_BICYCLE, payload: response.data });
    dispatch(openSnackbar("Your classified has been updated", "success"));
  });
};

export const deleteBicycle = id => async dispatch => {
  asyncAction(dispatch, async () => {
    await bicycle.delete(`/bicycles/${id}`);

    dispatch({ type: DELETE_BICYCLE, payload: id });
  });
};

export const fetchBicycle = id => async dispatch => {
  asyncAction(dispatch, async () => {
    const response = await bicycle.get(`/bicycles/${id}`);

    dispatch({ type: FETCH_BICYCLE, payload: response.data });
  });
};

export const fetchBicycles = () => async dispatch => {
  asyncAction(dispatch, async () => {
    const response = await bicycle.get(`/bicycles`);

    dispatch({ type: FETCH_BICYCLES, payload: response.data });
  });
};
