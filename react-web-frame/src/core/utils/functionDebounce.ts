export const FunctionDebounce = (func: Function, wait: number, immediate = false) => {
  let timer: number | undefined;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    if (immediate) {
      if (!timer) func.apply(this, args);
      timer = window.setTimeout(() => {
        timer = undefined;
      }, wait);
    } else {
      timer = window.setTimeout(() => {
        func.apply(this, args);
      }, wait);
    };
  };
};
