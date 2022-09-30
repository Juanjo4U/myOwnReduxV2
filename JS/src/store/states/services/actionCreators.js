import { types } from "./types.js";

export const setAllServices = (services = []) => ({
  type: types.SET_ALL_SERVICES,
  payload: services,
});

export const setServiceSelected = (id) => ({
  type: types.SET_SERVICE_SELECTED,
  payload: id,
});
