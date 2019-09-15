import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import languageReducer from "./reducers/languageReducer";
import bicycleReducer from "./reducers/bicycleReducer";
import asyncReducer from "./reducers/asyncReducer";
import themeReducer from "./reducers/themeReducer";
import notificationReducer from "./reducers/notificationReducer";

export default combineReducers({
  authReducer,
  languageReducer,
  themeReducer,
  bicycleReducer,
  asyncReducer,
  notificationReducer
});
