export function isFunction(...functions) {
  return !functions.find((func) => typeof func !== "function");
}

export function isObject(...objects) {
  return !objects.find((obj) => Array.isArray(obj) || typeof obj !== "object");
}

export function isEmptyObject(...objects) {
  return objects.find((obj) => !Object.values(obj).length);
}

export function isSomeObjectWithData(...objects) {
  return objects.some((obj) => Object.values(obj).length);
}

export function withDelay(func = () => {}, delay = 0.5) {
  if (!isFunction(func)) {
    throw new Error(`withDelay ERR: the argument passed has to be a function`);
  }
  return function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = func(...args);
          return resolve(result);
        } catch (error) {
          return reject(error);
        }
      }, delay * 1000);
    });
  };
}

export function get(path = "", defaultValue) {
  const Keys = path.split(".");
  return function (obj = {}) {
    let result = obj;
    Keys.forEach((key) => (result = result?.[key]));
    return result ?? defaultValue;
  };
}

export function pipe(...functions) {
  return function (...initialArgs) {
    let nextArgs = initialArgs;
    let result;
    for (let i = 0, end = functions.length; i < end; i++) {
      if (!isFunction(functions[i])) {
        throw new Error(`pipe: PARAM AT POSITION: ${i} IS NOT A FUNCTION TO PIPE`);
      }
      result = functions[i](...nextArgs);
      nextArgs = [result];
    }
    return result;
  };
}
