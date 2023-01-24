function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function processArray(arr, factorial) {
  return arr.map((el) => factorial(el));
}
