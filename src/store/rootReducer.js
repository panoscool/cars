import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import bicycleReducer from "./reducers/bicycleReducer";
import asyncReducer from "./reducers/asyncReducer";
import notificationReducer from './reducers/notificationReducer';

export default combineReducers({
  authReducer,
  bicycleReducer,
  asyncReducer,
  notificationReducer
});
