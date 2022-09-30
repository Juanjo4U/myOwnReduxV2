export function combineReducers(reducers = {}) {
  return function combinedReducer(prevState, action = {}) {
    const state = {};
    Object.entries(reducers).forEach(([key, reducer = (state) => state]) => {
      state[key] = reducer(prevState?.[key], action);
    });
    return state;
  };
}
