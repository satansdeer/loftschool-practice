function memo(func) {
  var cache = {};
  return function() {
    const key = JSON.stringify(arguments);
    if (cache[key]) {
      console.log(cache);
      return cache[key];
    } else {
      const val = func.apply(null, arguments);
      cache[key] = val;
      return val;
    }
  };
}

const memoAdder = memo((x, y) => x + y)

memoAdder(2, 2)
memoAdder(2, 2)
memoAdder(2, 2)
memoAdder(2, 2)

memoAdder(2, 3)

memoAdder(2, 2)