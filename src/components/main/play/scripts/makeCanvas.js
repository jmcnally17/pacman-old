/* eslint-disable no-undef */
const Boundary = require("../models/boundary");
const PacMan = require("../models/pacman");
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

const makeCanvas = () => {
  requestAnimationFrame(makeCanvas);
  const board = document.querySelector("#board");
  const ctx = board.getContext("2d");

  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === "-") {
        const boundary = new Boundary({
          position: {
            x: length * j,
            y: length * i,
          },
        });
        boundary.draw(ctx);
      }
    });
  });

  move(pacman);
  pacman.update(ctx);
};

module.exports = makeCanvas;
