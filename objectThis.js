this.country = "Australia";

const person = {
  name: "John",
  age: 25,
  handleCalculateSalary: function () {
    // ES5
    console.log(this.name);
    console.log("Salary: 1000");
  },
  handleGetCountry: () => {
    console.log(this.country);
  },
};

person.handleCalculateSalary();
