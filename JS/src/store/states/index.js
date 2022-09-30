import { serviceReducer } from "./services/reducer.js";
import { userReducer } from "./user/reducer.js";

export const rootReducer = {
  user: userReducer,
  service: serviceReducer,
};
