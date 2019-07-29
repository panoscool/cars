import { combineReducers } from "redux";
import bicyclesReducer from "./bicyclesReducer";
import asyncReducer from './asyncReducer'

export default combineReducers({
  bicycle: bicyclesReducer,
  async: asyncReducer
});
