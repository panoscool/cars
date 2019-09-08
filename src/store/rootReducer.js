import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import bicycleReducer from "./reducers/bicycleReducer";
import asyncReducer from "./reducers/asyncReducer";

export default combineReducers({
  auth: authReducer,
  bicycle: bicycleReducer,
  async: asyncReducer
});
