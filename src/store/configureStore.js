import { createStore, applyMiddleware, compose } from "redux";
import throttle from "lodash/throttle";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { loadState, saveState } from "../services/storage";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const persistedState = loadState();

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(throttle(() => {
  saveState({
    themeReducer: store.getState().themeReducer,
    languageReducer: store.getState().languageReducer
  });
}, 1000)
);
