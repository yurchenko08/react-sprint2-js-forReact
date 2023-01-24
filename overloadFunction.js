const func = require("./Checker.js");
const defaultFunction = (a, b) =>
  Array.isArray(a) ? a.map((el) => el * b) : a * b;
function overloadedFunc(arr = [1, 2, 3], num = 2, func = defaultFunction) {
  return func(arr, num);
}
console.log(overloadedFunc()); //[2,4,6]
console.log(overloadedFunc([2, 4, 6, 8])); //[4,8,12,16]
console.log(overloadedFunc([2, 4, 6], 3)); //[6,12,18]
console.log(overloadedFunc(10)); //20
console.log(overloadedFunc(8, 3)); //24
console.log(overloadedFunc(undefined, undefined, sum)); //
