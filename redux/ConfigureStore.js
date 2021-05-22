import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { users } from "./users";
import { questions } from "./questions";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ users, questions }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
