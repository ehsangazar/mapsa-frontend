class Robot {
  // NORTH, SOUTH, EAST, WEST
  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
    this.direction = "NORTH";
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

  rotate = (direction) => {
    this.direction = direction;
  };
}

module.exports = Robot;
