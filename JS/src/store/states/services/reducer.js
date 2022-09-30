import { types } from "./types.js";

export const servicesInitialState = {
  serviceSelected: null,
  allServices: [],
};

export const serviceReducer = (
  currentState = servicesInitialState,
  { type, payload } = {}
) => {
  const state = { ...currentState };
  switch (type) {
    case types.SET_ALL_SERVICES:
      state.allServices = payload;
      break;

    case types.SET_SERVICE_SELECTED: {
      const selectedId = payload;
      state.serviceSelected = state.allServices.find(
        (service = {}) => service?.id === selectedId
      );
      break;
    }

    default:
      break;
  }
  return state;
};
