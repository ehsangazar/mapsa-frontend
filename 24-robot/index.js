class Board {
  constructor(size) {
    this.size = size;
    this.board = [];
  }
}

class Robot {
  // NORTH, SOUTH, EAST, WEST
  #position = {
    x: 0,
    y: 0,
  };
  constructor() {
    this.#position = {
      x: 0,
      y: 0,
    };
    this.direction = "NORTH";
  }

  get position() {
    return this.#position;
  }

  whereAmI = () => {
    console.log("I am at", this.position, "facing", this.direction);
  };

  move = () => {
    switch (this.direction) {
      case "NORTH":
        this.position.y++;
        break;
      case "SOUTH":
        this.position.y--;
        break;
      case "EAST":
        this.position.x++;
        break;
      case "WEST":
        this.position.x--;
        break;
      default:
        break;
    }
  };
}

const myBoard = new Board(8);
const myRobot1 = new Robot();
const myRobot2 = new Robot();

myRobot1.whereAmI();
myRobot1.move();
// myRobot1.position
myRobot1.whereAmI();
myRobot2.whereAmI();
