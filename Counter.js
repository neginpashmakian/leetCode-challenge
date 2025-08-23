function createCounter(n) {
  let current = n; // this is our memory

  return function () {
    // inner function (the counter)
    let result = current; // take the current value
    current = current + 1; // update for next call
    return result; // return current value
  };
}
