import { defaultMiddleWare } from "../middleware/index.js";
import { initializeStoreState } from "./actions/index.js";
import { isObject } from "../../lodash/index.js";
import { createObserver } from "../utilities/index.js";

export function createStore(
  reducer = (state) => state,
  middleware = defaultMiddleWare
) {
  let state;
  const observer = createObserver({ name: "store" });

  const subscribe = observer.subscribe;

  const getState = () => state;

  function dispatch(action = {}) {
    try {
      state = reducer(store.getState(), action);
      observer.setState();
    } catch (error) {
      let err = error;
      if (!isObject(action)) {
        err = "action has to be an object and have a property type";
      }
      throw new Error(err);
    }
    return action;
  }

  const store = {
    getState,
    dispatch,
    subscribe,
  };

  store.dispatch = middleware(store)?.(store.dispatch);
  store.dispatch(initializeStoreState());

  return store;
}
