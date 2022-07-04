/* eslint-disable no-undef */
const Boundary = require("./boundary");
const PacMan = require("./pacman");

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

const makeCanvas = () => {
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

  const pacman = new PacMan({
    position: {
      x: (3 * length) / 2,
      y: (3 * length) / 2,
    },
  });
  pacman.draw(ctx);
};

module.exports = makeCanvas;
