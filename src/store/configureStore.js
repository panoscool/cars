import { createStore, applyMiddleware, compose } from "redux";
import throttle from "lodash/throttle";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { loadState, saveState } from "../services/storage";

const persistedState = loadState();

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

export const store = createStore(
  rootReducer,
  persistedState,
  // composeEnhancers(applyMiddleware(thunk))
  applyMiddleware(thunk)
);

store.subscribe(
  throttle(() => {
    saveState({
      rootReducer: store.getState().type
    });
  }, 1000)
);

// store.subscribe(() => {
//   saveState(store.getState());
// });

console.log(persistedState);
