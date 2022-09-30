import { requestAllServices } from "../services/thunks.js";
import { requestAllUserTypes, requestUserData } from "../user/thunks.js";

export const requestAllByUsingThunk = () => (dispatch, getState) => {
  const state = getState();
  console.log("TESTING_THUNK_GET_STATE: ", state);
  dispatch(requestUserData());
  dispatch(requestAllUserTypes());
  dispatch(requestAllServices());
};
