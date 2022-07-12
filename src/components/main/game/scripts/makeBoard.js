/* eslint-disable no-undef */
const makeBoundaries = require("./boundaries/makeBoundaries");
const makePellets = require("./pellets/makePellets");
const makeGhosts = require("./ghosts/makeGhosts");
const makePacman = require("./pacman/makePacman");
const implementBoundaries = require("./boundaries/implementBoundaries");
const implementPellets = require("./pellets/implementPellets");
const implementGhosts = require("./ghosts/implementGhosts");
const implementPacman = require("./pacman/implementPacman");
const displayScore = require("./displayScore");

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

const boundaries = makeBoundaries(map, length);
const pellets = makePellets(map, length);
const ghosts = makeGhosts();
const pacman = makePacman(length);

let score = {
  points: 0,
};

const lastKeyPressed = {
  key: "",
};

const makeBoard = () => {
  requestAnimationFrame(makeBoard);
  const board = document.querySelector("#board");
  const ctx = board.getContext("2d");
  ctx.clearRect(0, 0, board.clientWidth, board.clientHeight);

  implementBoundaries(boundaries, ctx, pacman);
  implementPellets(pellets, ctx, pacman, score);
  implementGhosts(ghosts, boundaries, ctx);
  implementPacman(lastKeyPressed, pacman, boundaries, ctx);
  displayScore(score);
};

module.exports = makeBoard;
