import { types } from "./types.js";

export const userInitialState = {
  allUserTypes: [],
  currentUser: {},
};

export const userReducer = (
  currentState = userInitialState,
  { type, payload } = {}
) => {
  const state = { ...currentState };
  switch (type) {
    case types.SET_USER_DATA:
      state.currentUser = payload;
      break;
    case types.SET_ALL_USER_TYPES:
      state.allUserTypes = payload;
      break;
    default:
      break;
  }
  return state;
};
