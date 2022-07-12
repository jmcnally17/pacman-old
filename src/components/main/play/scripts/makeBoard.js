/* eslint-disable no-undef */
const changeDirection = require("./changeDirection");
const checkWinCondition = require("./checkWinCondition");
const displayScore = require("./displayScore");
const drawBoundaries = require("./drawBoundaries");
const drawPellets = require("./drawPellets");
const eatPellet = require("./eatPellet");
const ghostMovement = require("./ghostMovement/ghostMovement");
const makeBoundaries = require("./makeBoundaries");
const makeGhosts = require("./makeGhosts");
const makePacman = require("./makePacman");
const makePellets = require("./makePellets");
const move = require("./move");
const stopPacmanCollision = require("./stopPacmanCollision");

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

  drawBoundaries(boundaries, ctx);
  stopPacmanCollision(boundaries, pacman);
  drawPellets(pellets, ctx);
  checkWinCondition(pellets, score);
  eatPellet(pellets, pacman, score);
  ghostMovement(ghosts, boundaries, ctx);
  move(lastKeyPressed);
  changeDirection(lastKeyPressed, pacman, boundaries);
  pacman.update(ctx);
  displayScore(score);
};

module.exports = makeBoard;
