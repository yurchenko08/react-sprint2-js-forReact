const upperCase = (str) => str.toUpperCase();
const tripleExclaim = (str) => str + "!!!";
const split = (str) => str.split((separator = "_"));
const join = (arr) => arr.join((separator = " "));
const copy = (str) => `${str} `.repeat(2);

const createComposition =
  (...functions) =>
  (x) =>
    functions.reduce((acc, fn) => fn(acc), x);

const result = createComposition(upperCase, tripleExclaim, split, join, copy);
console.log(result("by_ticket_now")); //  BY TICKET NOW!!! BY TICKET NOW!!!
console.log(result("total sale")); //  TOTAL SALE!!! TOTAL SALE!!!
