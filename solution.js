// 1 Multiply - Function Declaration
function calcMultiply(a, b) {
  console.log(a * b);
}
calcMultiply(5, 7);

// 2 Multiply - Function Declarations as Values
// let multValue = function calcMultValue() {
//   let value = 5 * 7;
//   return value;
// };
let total = function (a, b) {
  console.log(a * b);
};

total(7, 6);

// console.log(multValue);

// 3 Multiply - Arrow Function
const calcMultArrow = (a, b) => {
  console.log(a * b);
};
calcMultArrow(5, 7);

// 4 Declarations
function calcRemainder1(x, y) {
  console.log(x % y);
}
calcRemainder1(4, 3);
console.log("---------------");
let remainder2 = function (x, y) {
  console.log(x % y);
};
remainder2(4, 3);
console.log("---------------");
const remainder3 = (x, y) => {
  console.log(x % y);
};
remainder3(4, 3);
