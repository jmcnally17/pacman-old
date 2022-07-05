/* eslint-disable no-undef */
const Boundary = require("../models/boundary");
const PacMan = require("../models/pacman");
const changeDirection = require("./changeDirection");
const hitBoundaryConditional = require("./hitBoundaryConditional");
const move = require("./move");

const length = 40;
const map = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
  ["-", " ", "-", " ", "-", "-", "-", " ", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", "-", " ", " ", " ", "-", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", " ", "-", "-", "-", " ", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", "-", " ", " ", " ", "-", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", " ", "-", "-", "-", " ", "-", " ", "-"],
  ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
];

let boundaries = [];

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

  changeDirection(lastKeyPressed, pacman, boundaries);

  move(lastKeyPressed);
  pacman.update(ctx);
};

module.exports = makeBoard;
