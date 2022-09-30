import { types } from "./types.js";

export const setUserData = (data = {}) => ({
  type: types.SET_USER_DATA,
  payload: data,
});


export const setAllUserTypes = (allTypes = {}) => ({
  type: types.SET_ALL_USER_TYPES,
  payload: allTypes,
});