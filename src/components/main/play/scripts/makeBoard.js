/* eslint-disable no-undef */
const displayScore = require("./displayScore");
const implementGhosts = require("./ghosts/implementGhosts");
const makeBoundaries = require("./boundaries/makeBoundaries");
const makeGhosts = require("./ghosts/makeGhosts");
const makePacman = require("./pacman/makePacman");
const makePellets = require("./pellets/makePellets");
const implementBoundaries = require("./boundaries/implementBoundaries");
const implementPellets = require("./pellets/implementPellets");
const implementPacman = require("./pacman/implementPacman");

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
