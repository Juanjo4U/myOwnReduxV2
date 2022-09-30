import { get, pipe } from "../../../../myOwnModules/lodash/index.js";

export const selectServices = get("service", {}); // (state = {}) => state.service ?? {};

export const selectAllServices = pipe(selectServices, get("allServices", []));

export const selectSelectedService = pipe(
  selectServices,
  get("serviceSelected")
);
