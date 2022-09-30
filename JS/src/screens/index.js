import { useStoreDispatch, useStoreSelector } from "../store/index.js";
import { requestAllByUsingThunk } from "../store/states/common/thunks.js";
import { selectAllServices } from "../store/states/services/selectors.js";
import { selectAllUserTypes, selectCurrentUser } from "../store/states/user/selectors.js";
import { SelectService } from "../components/index.js";
import { isEmptyObject, isSomeObjectWithData } from "../../myOwnModules/lodash/index.js";
import { formatDataToHTML } from "../utils/index.js";

export function AppRender() {
    const userData = useStoreSelector(selectCurrentUser);
    const AllUserTypes = useStoreSelector(selectAllUserTypes);
    const allServices = useStoreSelector(selectAllServices);
    const isSomeWithData = isSomeObjectWithData(
      userData,
      AllUserTypes,
      allServices
    );
    const isRequestButtonVisible = isSomeWithData
      ? false
      : isEmptyObject(userData, AllUserTypes, allServices);
    const requestDataButtonId = "requestAllData";
  
    const dispatch = useStoreDispatch();
  
    const requestAllData = () => {
      dispatch(requestAllByUsingThunk());
    };
  
    setTimeout(() => {
      if (isRequestButtonVisible) {
        const btn = document.getElementById(requestDataButtonId);
        btn?.addEventListener("click", requestAllData);
      }
    }, 0);
  
    return (document.body.innerHTML = `
        <h3 style="text-align: center; color: orange;">THIS IS MY OWN REDUX - V2</h3>
        <h4 style="text-align: center; color: red;">Open the console to see how my OWN LOGGER middleware works as well</h4>
        <br>
        <div>
            ${formatDataToHTML({ title: "USER_DATA: ", data: userData })}
            ${formatDataToHTML({ title: "ALL_USER_TYPES: ", data: AllUserTypes })}
            ${formatDataToHTML({ title: "ALL_SERVICES: ", data: allServices })}
            ${SelectService()}
        </div>
        <br>
        ${isRequestButtonVisible ? 
            `
            <button id="${requestDataButtonId}">Click to request all data by using my own Thunk middleware</button>
            `
            : ``
        }
      `
    );
  }