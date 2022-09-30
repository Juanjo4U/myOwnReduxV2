import { store } from "./src/store/index.js";
import { AppRender } from "./src/screens/index.js";

AppRender();
store.subscribe(AppRender);
