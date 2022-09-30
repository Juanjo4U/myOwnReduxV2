import { isFunction } from "../../../lodash/index.js";

export function createObserver(
  { name = "defaultObserverName", initialState } = {},
  ...extraArgs
) {
  let state = initialState;
  const subscribers = new Map();
  let nextSubscriberIndex = 0;

  function getNextSubscriberKey() {
    nextSubscriberIndex++;
    return `${name}_sub_${nextSubscriberIndex}`;
  }

  function subscribe(subscriber = () => {}) {
    if (!isFunction(subscriber)) return;
    const key = getNextSubscriberKey();
    subscribers.set(key, subscriber);
    return () => subscribers.delete(key);
  }

  const getState = () => state;
  const notifyUpdates = () => subscribers.forEach((sub) => sub(getState(), ...extraArgs));

  function setState(newState) {
    state = newState;
    notifyUpdates();
  }

  const observer = {
    subscribe,
    getState,
    setState,
  };

  return observer;
}
