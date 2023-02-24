let seconds = 0;
let timerInterval = null;
let snakeInterval = null;
let isCounting = false; // FLAG
let score = 0;
const snake = {
  positions: [
    {
      x: 0,
      y: 0,
    },
  ],
  directon: "right",
};
const food = {
  x: 300,
  y: 300,
};

const snakeStartDOM =
  document.getElementById("snakeStart");
const snakeBoardDOM =
  document.getElementById("snakeBoard");

// camelCase => isCounting
// snake_case => is_counting
// kebab-case => is-counting
// PascalCase => IsCounting

const convertSecondstoTime = () => {
  let minutesNumber = Math.floor(
    seconds / 60
  );
  let secondsNumber = seconds % 60;

  if (minutesNumber < 10) {
    minutesNumber = `0${minutesNumber}`;
  }

  if (secondsNumber < 10) {
    secondsNumber = `0${secondsNumber}`;
  }

  return `${minutesNumber}:${secondsNumber}`;
};

const updateTimeinDOM = () => {
  document.querySelector(
    "#snakeTime .time"
  ).innerHTML = convertSecondstoTime();
};

const updateSnakeinDOM = () => {
  let snakeHTML = ``;
  snake.positions.forEach(
    (position, index) => {
      snakeHTML += `<div class="snakeBox" style="left:${position.x}px; top: ${position.y}px"></div>`;
    }
  );
  document.getElementById(
    "snake"
  ).innerHTML = snakeHTML;
};

const startTime = () => {
  if (isCounting) return;
  isCounting = true;
  snake.positions = [
    {
      x: 0,
      y: 0,
    },
  ];
  snake.directon = "right";
  timerInterval = setInterval(() => {
    seconds++;
    updateTimeinDOM();
  }, 1000);
};

const generateFood = () => {
  food.x = Math.floor(
    Math.random() *
      (snakeBoardDOM.clientWidth - 10)
  );
  food.x = food.x - (food.x % 10);
  food.y = Math.floor(
    Math.random() *
      (snakeBoardDOM.clientHeight - 10)
  );
  food.y = food.y - (food.y % 10);
  document.getElementById(
    "snakeFood"
  ).style.left = `${food.x}px`;
  document.getElementById(
    "snakeFood"
  ).style.top = `${food.y}px`;
  document.getElementById(
    "snakeFood"
  ).style.display = "block";

  document.querySelector(
    "#snakeScore .score"
  ).innerHTML = score;
};

const stopTime = () => {
  clearInterval(timerInterval);
  clearInterval(snakeInterval);
  seconds = 0;
  updateTimeinDOM();
};
snakeStartDOM.addEventListener(
  "click",
  () => {
    snakeStartDOM.disabled = true;
    startTime();
    moveSnake();
    generateFood();
    updateSnakeinDOM();
  }
);

document
  .getElementById("snakeStop")
  .addEventListener("click", () => {
    isCounting = false;
    snakeStartDOM.disabled = false;
    stopTime();
  });

const endGame = () => {
  stopTime();
  snakeStartDOM.disabled = false;
  isCounting = false;
};

const moveSnake = () => {
  snakeInterval = setInterval(() => {
    let newSnakePositions = [];
    const tailPosition =
      snake.positions[
        snake.positions.length - 1
      ];
    snake.positions.forEach(
      (position, index) => {
        if (index === 0) {
          newSnakePositions.push({
            x: position.x,
            y: position.y,
          });
          if (
            snake.directon === "right"
          ) {
            newSnakePositions[0].x += 10;
          }
          if (
            snake.directon === "left"
          ) {
            newSnakePositions[0].x -= 10;
          }
          if (snake.directon === "up") {
            newSnakePositions[0].y -= 10;
          }
          if (
            snake.directon === "down"
          ) {
            newSnakePositions[0].y += 10;
          }
        } else {
          newSnakePositions.push(
            snake.positions[index - 1]
          );
        }
      }
    );

    snake.positions = newSnakePositions;

    const boardHeight =
      snakeBoardDOM.clientWidth;
    const boardWidth =
      snakeBoardDOM.clientWidth;

    if (snake.positions[0].x < 0) {
      endGame();
      return;
    }
    if (
      snake.positions[0].x >
      boardWidth - 10
    ) {
      endGame();
      return;
    }
    if (snake.positions[0].y < 0) {
      endGame();
      return;
    }
    if (
      snake.positions[0].y >
      boardHeight - 10
    ) {
      endGame();
      return;
    }

    snake.positions.forEach(
      (position, index) => {
        if (index === 0) return;
        if (
          snake.positions[0].x ===
            position.x &&
          snake.positions[0].y ===
            position.y
        ) {
          endGame();
          return;
        }
      }
    );

    if (
      snake.positions[0].x === food.x &&
      snake.positions[0].y === food.y
    ) {
      snake.positions.push({
        x: tailPosition.x,
        y: tailPosition.y,
      });
      score +=
        snake.positions.length + 10;
      generateFood();
    }
    updateSnakeinDOM();
  }, seconds * 10 + 250);
};

document.addEventListener(
  "keydown",
  (event) => {
    if (!isCounting) return;
    if (event.key === "ArrowRight") {
      snake.directon = "right";
    }
    if (event.key === "ArrowLeft") {
      snake.directon = "left";
    }
    if (event.key === "ArrowUp") {
      snake.directon = "up";
    }
    if (event.key === "ArrowDown") {
      snake.directon = "down";
    }
  }
);
