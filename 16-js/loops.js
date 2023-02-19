// LOOP

// i++ // i = i + 1
// i+=1 // i = i + 1
// i+=2 // i = i + 2

// basic
for (let index = 5; index < 10; index = index + 2) {
  console.log(index, "hello world");
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// 1 => numbers[0]
// 2 => numbers[1]

for (let index = 0; index < numbers.length; index += 1) {
  // length of array
  console.log(numbers[index], "array loop");
}

for (const number of numbers) {
  console.log(number, "numbers");
}

const colors = {
  red: "red-color-hexcode",
  green: "green-color-hexcode",
  blue: "blue-color-hexcode",
  yellow: "yellow-color-hexcode",
};

for (const key in colors) {
  console.log(key, colors[key], "object loop");
}

// Object.keys -> red, green, blue, yellow
// Object.values -> red-color-hexcode, green-color-hexcode, blue-color-hexcode, yellow-color-hexcode

for (let index = 0; index < Object.keys(colors).length; index++) {
  console.log(index, Object.values(colors)[index]);
}

let age = 50;
// while
while (age < 40) {
  console.log("you are still alive");
  age += 1;
}

// do while
do {
  console.log("you are still alive");
  age += 1;
} while (age < 40);

// loooooooooooooop
// forEach, map, every, some, reduce, find, findIndex, includes, sort, for of, for in
