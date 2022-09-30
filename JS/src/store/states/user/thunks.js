import { api } from "../../../api/index.js";
import { setAllUserTypes, setUserData } from "./actionCreators.js";

export const requestAllUserTypes = () => {
  return async (dispatch, getState) => {
    try {
      const userTypes = await api.requestAllUserTypes();
      dispatch(setAllUserTypes(userTypes));
    } catch (error) {
      console.error("error_requesting_allUserTypes", error);
    }
  };
};

export const requestUserData = () => {
  return async (dispatch, getState) => {
    try {
      const data = await api.requestUserData();
      dispatch(setUserData(data));
    } catch (error) {
      console.error("error_requesting_UserData", error);
    }
  };
};
