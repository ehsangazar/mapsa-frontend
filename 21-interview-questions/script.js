var x = 1;
const age = 1;

if (x === 1) {
  var x = 2;
  const age = 3;

  console.log("x", x);
  console.log("age", age);
  // Expected output: 2
}

console.log("x", x);
// Expected output: 2

let y = 1;

if (y === 1) {
  let y = 2;

  console.log("y", y);
  // Expected output: 2
}

console.log("y", y);
// Expected output: 2

// SCOPE
// Curly braces create a new scope
