const add = function (num1, num2) {
  num1 ? num1 : num1 = 0;
  num2 ? num2 : num2 = 0;
  return num1 + num2;
};

const subtract = function (num1, num2) {
  num1 ? num1 : num1 = 0;
  num2 ? num2 : num2 = 0;
  return num1 - num2;
};

const sum = function (numbers) {
  let sum = 0;
  sum += numbers.reduce((a, b) => a + b, 0);
  return sum;
};

const multiply = function (numbers) {
  let result = 1;
  numbers.forEach(number => result *= number);
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) return 1;
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
