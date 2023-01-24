negate = function (x) {
  return -x;
};

halve = function (x) {
  return x / 2;
};

square = function (x) {
  return x * x;
};

double = function (x) {
  return 2 * x;
};

// combineFunctions(negate, halve, square) should return a function
// square(halve(negate(x)))

// combineFunctions(negate, double) should return a function
// double(negate(x)))
const combineFunctions =
  (...functions) =>
  (x) =>
    functions.reduce((acc, fn) => fn(acc), x);
