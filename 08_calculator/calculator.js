const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numsArray) {
  // 0 is the initial value
	return numsArray.reduce((acc, num) => acc + num, 0);
};

const multiply = function(numsArray) {
  // initial value = 1
  return numsArray.reduce((acc, num) => acc * num, 1);
};

const power = function(base, exmponent) {
  let result = 1;
  for(let i = 1; i <= exmponent; i++) {
    result *= base;
  }

  return result;
};

const factorial = function(num) {
	let result = 1;
  for(let i = 1; i <= num; i++) {
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
