/* eslint-disable no-undef */
const Boundary = require("../models/boundary");
const PacMan = require("../models/pacman");
const Pellet = require("../models/pellet");
const changeDirection = require("./changeDirection");
const trackScore = require("./displayScore");
const hitBoundaryConditional = require("./hitBoundaryConditional");
const move = require("./move");

const length = 40;
const map = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", ".", ".", ".", ".", ".", ".", ".", ".", ".", "-"],
  ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", "-", ".", ".", ".", "-", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", "-", ".", ".", ".", "-", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
  ["-", ".", ".", ".", ".", ".", ".", ".", ".", ".", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
];

let boundaries = [];
let pellets = [];

map.forEach((row, i) => {
  row.forEach((element, j) => {
    if (element === "-") {
      const boundary = new Boundary({
        position: {
          x: length * j,
          y: length * i,
        },
      });
      boundaries.push(boundary);
    } else if (element === ".") {
      const pellet = new Pellet({
        position: {
          x: (length * (2 * j + 1)) / 2,
          y: (length * (2 * i + 1)) / 2,
        },
      });
      pellets.push(pellet);
    }
  });
});

const pacman = new PacMan({
  position: {
    x: (3 * length) / 2,
    y: (3 * length) / 2,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

let lastKeyPressed = {
  key: "",
};

let score = 0;

const makeBoard = () => {
  requestAnimationFrame(makeBoard);
  const board = document.querySelector("#board");
  const ctx = board.getContext("2d");
  ctx.clearRect(0, 0, board.clientWidth, board.clientHeight);

  boundaries.forEach((boundary) => {
    boundary.draw(ctx);
    if (
      hitBoundaryConditional(pacman, boundary, {
        velocity: {
          x: pacman.velocity.x,
          y: pacman.velocity.y,
        },
      })
    ) {
      pacman.velocity.x = 0;
      pacman.velocity.y = 0;
    }
  });
  let count = 0;
  pellets.forEach((pellet) => {
    if (!pellet.hasBeenEaten) {
      pellet.draw(ctx);
    } else {
      count++;
    }
    if (count === pellets.length) {
      window.alert(`Congratulations, you win!\nYou scored ${score} points!`);
    }
    if (
      pellet.position.x === pacman.position.x &&
      pellet.position.y === pacman.position.y &&
      !pellet.hasBeenEaten
    ) {
      pellet.changeEatenState(true);
      score += 10;
    }
  });

  changeDirection(lastKeyPressed, pacman, boundaries);

  move(lastKeyPressed);
  pacman.update(ctx);
  trackScore(score);
};

module.exports = makeBoard;
