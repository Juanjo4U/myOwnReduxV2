import { isFunction } from "../lodash/index.js";

export function logger(store = {}) {
  return function middleLogger(next = () => {}) {
    return function innerlogger(action = {}) {
      if (!isFunction(store?.getState) || !action?.type) {
        return next(action);
      }
      console.group(`ACTION: ${action.type} - ${new Date().toString()}`);
      console.log("%cprevState: ", "color: #ededff;", store.getState());
      console.log("%caction: ", "color: #337eff;", action);
      const result = next(action);
      console.log("%cnextState: ", "color: #19FF66;", store.getState());
      console.groupEnd();
      return result;
    };
  };
}

export function thunk(store = {}) {
  return function middleThunk(next = () => {}) {
    return function innerThunk(action = {}) {
      if (isFunction(action, store?.dispatch, store?.getState)) {
        return action(store.dispatch, store.getState);
      }
      return next(action);
    };
  };
}
