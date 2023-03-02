class Animal {
  constructor(legs, eyes) {
    this.legs = legs;
    this.eyes = eyes;
  }

  getLegs() {
    console.log("this is a function");
    return this.legs;
  }
}

class Human extends Animal {
  constructor(legs, eyes, hands = 2) {
    super(legs, eyes);
    this.hands = hands;
  }
  getHands() {
    return this.hands;
  }
}

const dog = new Animal();
const cat = new Animal();
console.log("dog", dog.getLegs());
console.log("cat", cat.getLegs());

const ehsan = new Human(2, 2, 2);
const javad = new Human(1, 2, 2);

console.log("javad", javad.getHands());
console.log("javad legs", javad.getLegs());
