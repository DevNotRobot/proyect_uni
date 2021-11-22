import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { uiReducer } from "../Reducers/uiReducer";
import { calendarReducer } from "../Reducers/calendarReducer";
import { authReducer } from "../Reducers/authReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducers = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  auth: authReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
