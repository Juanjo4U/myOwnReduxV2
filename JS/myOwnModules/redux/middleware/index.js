export const defaultMiddleWare = (store = {}) => {
  return function middleDefaultMiddleware(next = () => {}) {
    return function innerDefaultMiddleware(action = {}) {
      console.log("FIRED_DEFAULT_MIDDLEWATE", { store, next, action });
      return next(action);
    };
  };
};

export const applyMiddleware = (...middlewares) => {
  return function outerApplyMiddleware(store = {}) {
    return function middleApplyMiddleware(mainNext = () => {}) {
      const mainMiddleware = middlewares.reduceRight(
        (prevNext, currentMiddleware) => currentMiddleware(store)?.(prevNext),
        mainNext
      );
      return function innerApplyMiddleware(action = {}) {
        return mainMiddleware(action);
      };
    };
  };
};
