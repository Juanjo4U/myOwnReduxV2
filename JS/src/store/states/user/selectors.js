import { get, pipe } from "../../../../myOwnModules/lodash/index.js";

export const selectUser = get("user", {});

export const selectCurrentUser = pipe(selectUser, get("currentUser", {}));

export const selectAllUserTypes = pipe(selectUser, get("allUserTypes", []));
