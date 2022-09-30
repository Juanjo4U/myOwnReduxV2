import { store } from "./src/store/index.js";
import { App } from "./src/App.js";

App();
store.subscribe(App);
