const students = ["maral", "sepideh", "maryam", "mehrdad"];

console.log(students);

students[students.length] = "mohammad";

// students.push("ali");

const myStudents = [
  {
    // key: value
    name: "maral",
    age: 20,
  },
  {
    name: "sepideh",
    age: 21,
  },
  {
    name: "maryam",
    age: 22,
  },
];

const shoppingList = [
  {
    name: "Bread",
    quantity: 1,
  },
  {
    name: "Milk",
    quantity: 2,
  },
  {
    name: "Eggs",
    quantity: 12,
  },
];

const person = {
  name: "maral",
  age: 20,
  address: {
    city: "tehran",
    country: "iran",
    street: "valiasr",
  },
};

person.family = {
  father: "mohammad",
  mother: "maryam",
  sister: "maryam",
};
person.cars = [
  {
    name: "bmw",
    model: "x5",
  },
  {
    name: "mercedes",
    model: "s500",
  },
];

const mohammadArray = [
  12, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// for (let index = 0; index < mohammadArray.length; index++) {
//   console.log(mohammadArray[index]);
// }
// push
// shift
// unshift
// pop
// splice
// slice
// indexOf
// concat

// ES6
mohammadArray.forEach((value, index) => {
  console.log(value);
});

mohammadArray.forEach(function (value, index) {
  console.log(value);
});

const a = [1, 2, 3];
const b = [4, 5, 6];

const c = a.concat(b);
console.log(c);
