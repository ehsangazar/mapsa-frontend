class Car {
  constructor(name, wheels, engine, year) {
    this.name = name;
    this.wheels = wheels;
    this.engine = engine;
    this.year = year;
  }

  printEverything() {
    console.log(
      `name: ${this.name}, wheels: ${this.wheels}, engine: ${this.engine}, year: ${this.year}`
    );
  }
}

// const myMazda = new Car("mazda", 4, "v6", 2019);
// myMazda.printEverything();

class Tesla extends Car {
  constructor(name, wheels, engine, year, autopilot) {
    super(name, wheels, engine, year);
    this.autopilot = autopilot;
  }

  //  override
  printEverything() {
    console.log(
      `name: ${this.name}, wheels: ${this.wheels}, engine: ${this.engine}, year: ${this.year}, autopilot: ${this.autopilot}`
    );
  }
}

const sepidehTesla = new Tesla("tesla", 4, "v6", 2019, true);
sepidehTesla.printEverything();
