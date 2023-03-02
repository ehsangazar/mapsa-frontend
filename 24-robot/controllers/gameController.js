const Board = require("../models/Board");
const Game = require("../models/Game");
const Robot = require("../models/Robot");

class GameController {
  constructor() {
    this.game = new Game();
  }

  play = () => {
    const myBoard = new Board(8);
    const myRobot1 = new Robot();
    const myRobot2 = new Robot();

    myRobot1.whereAmI();
    myRobot1.move();
    myRobot1.whereAmI();
    myRobot2.whereAmI();
  };
}
