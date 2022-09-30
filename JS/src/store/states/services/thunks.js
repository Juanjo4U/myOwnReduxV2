import { api } from "../../../api/index.js";
import { setAllServices } from "./actionCreators.js";

export const requestAllServices = () => {
  return (dispatch, getState) => {
    api.requestAllServices().then((services) => {
      dispatch(setAllServices(services));
    });
  };
};
