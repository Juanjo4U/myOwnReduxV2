import { MainScreen } from "./screens/index.js";

export const App = () => {
  document.body.innerHTML = MainScreen() ?? "";
};
