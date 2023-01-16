const debounce = (func, delay = 250) => {
  let timer = null;
  return (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(e), delay);
  };
}

const throttle = (func, frame = 250) => {
  let last = 0;
  return (e) => {
      const now = new Date();
      if (now - last >= frame) {
          func(e);
          last = now;
      }
  };
}

export {
  debounce,
  throttle,
};