const sum = function (a, b) {
  return a + b;
};

const sum2 = (a, b) => {
  // arrow function
  return a + b;
};
// INTERVIEW QUESTION
// THIS

const sumOfTwoNumbers = sum(1, 2);
const sumOfTwoNumbers2 = sum2(1, 2);
console.log("sumOfTwoNumbers", sumOfTwoNumbers);
console.log("sumOfTwoNumbers2", sumOfTwoNumbers2);

const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(4, 3));
