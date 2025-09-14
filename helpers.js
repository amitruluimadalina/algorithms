export function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function throttle(func, delay) {
  let timerId = null;
  return (...args) => {
    if (!timerId) {
      func(...args);
      timerId = setTimeout(() => {
        timerId = null;
      }, delay);
    }
  };
}
