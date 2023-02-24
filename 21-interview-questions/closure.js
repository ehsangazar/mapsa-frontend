// OBJECT PERSON
const person = {
  name: "John",
  age: 25,
  handleCalculateSalary: () => {
    console.log("Salary: 1000");
  },
};

const printPerson = (myPerson) => {
  console.log(`Name: ${myPerson.name}, Age: ${myPerson.age}`);
  myPerson.handleCalculateSalary();

  const printPerson2 = (myPerson) => {
    console.log(`Name: ${myPerson.name}, Age: ${myPerson.age}`);
    myPerson.handleCalculateSalary();
  };
  printPerson2(myPerson);
};

printPerson(person);
