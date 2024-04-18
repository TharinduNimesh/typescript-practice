let speed: number = 0;

// speed is 0, so it will be 10 (because 0 is falsy value) ?? is nullish coalescing operator
const ride = {
  speed: speed ?? 10,
};
