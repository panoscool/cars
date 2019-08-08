import { combineReducers } from "redux";
import bicycleReducer from "./bicycleReducer";
import asyncReducer from './asyncReducer'

export default combineReducers({
  bicycle: bicycleReducer,
  async: asyncReducer
});
