import { createStore, applyMiddleware, combineReducers } from "../../myOwnModules/redux/index.js";
import { thunk, logger } from "../../myOwnModules/middlewares/index.js";
import { rootReducer } from "./states/index.js";

export const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk, logger)
);

/* 
  Next functions are not real Hooks
  if you wanna know how to create your own Hook you can check my other project Creating my own React V1
  githubUrl: https://github.com/Juanjo4U/MyOwnReact-UseStateHook
  codesandboxURL: https://codesandbox.io/s/competent-maxwell-xt4gpv
*/
export const useStoreSelector = (selector = () => {}) => selector(store.getState());
export const useStoreDispatch = () => store.dispatch;
////////////////////////////////////////////////////////////////////////////////////////////////////////