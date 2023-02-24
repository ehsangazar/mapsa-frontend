// ES5
this.surname = "gazar";

function getNameFunction() {
  console.log("normal function", this);
}

// ES6
const getNameArrow = () => {
  console.log("arrow function", this);
};

getNameFunction = getNameFunction.bind(this);
getNameFunction();

getNameArrow();
console.log(this.surname);

// ARROW FUNCTION, NORMAL FUNCTION
// THIS IN NORMAL IS DIFFERENT FROM PARENT SCOPE
