import { withDelay } from "../../../myOwnModules/lodash/index.js";

export const getNextDelay = (() => {
  let delay = 0;
  return () => {
    delay +=  delay >= .2 ? 1 : .2;
    return delay;
  };
})();

function fakeReqAllData({ name = "fake_data", quantity = 2 } = {}) {
  const data = [];
  for (let i = 1; i <= quantity; i++) {
    data.push({
      id: `fake_${name}_id_${i}`,
      name: `fake_name_${i}`,
    });
  }
  return data;
}

export const requestUserData = withDelay(() => fakeReqAllData({ name: "userData" })?.[0], getNextDelay());
export const requestAllUserTypes = withDelay(() => fakeReqAllData({ name: "userType" }), getNextDelay());
export const requestAllServices = withDelay(() => fakeReqAllData({ name: "service", quantity: 4 }), getNextDelay());
