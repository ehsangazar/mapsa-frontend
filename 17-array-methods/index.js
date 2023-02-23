let myArray = [1, 2, 3, 4];

const fifoPush = (thisArray, newVariable) => {
  const newArray = [newVariable];
  for (let index = 0; index < thisArray.length; index++) {
    newArray[index + 1] = thisArray[index];
  }
  return newArray;
};

myArray = fifoPush(myArray, 10); // [10,1,2,3,4]

// Array.method
myArray.push(12);
myArray.unshift(13);
myArray.pop();
myArray.forEach((item) => {
  console.log("item", item);
});
myArray.sort((a, b) => {
  return a - b; // a-b > 0 => a > b
}); // Maraz
const check = myArray.includes(15);
const filteredArray = myArray.filter((item) => {
  if (item < 5) {
    return false;
  }
  return true;
});

// REACT
myArray.forEach((item, index) => {
  myArray[index] = item + 1;
});

myArray = myArray.map((item) => item + 1);

// PLUS ARRAY

const sumEverything = () => {
  let sum = 0;
  for (let index = 0; index < myArray.length; index++) {
    sum = sum + myArray[index];
  }
  return sum;
};

const sumVariable = myArray.reduce((sum, item) => {
  return sum + item;
});

console.log("myArray", myArray);
console.log("check", check);
console.log("filteredArray", filteredArray);
console.log("sumEverything", sumEverything(myArray));
console.log("sumVariable", sumVariable);
