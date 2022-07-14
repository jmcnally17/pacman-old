/* eslint-disable no-undef */
const makeBoundaries = require("./boundaries/makeBoundaries");
const makePellets = require("./pellets/makePellets");
const makePowerUps = require("./powerUps/makePowerUps");
const makeGhosts = require("./ghosts/makeGhosts");
const makePacman = require("./pacman/makePacman");
const implementBoundaries = require("./boundaries/implementBoundaries");
const implementPellets = require("./pellets/implementPellets");
const implementPowerUps = require("./powerUps/implementPowerUps");
const implementGhosts = require("./ghosts/implementGhosts");
const implementPacman = require("./pacman/implementPacman");
const displayScore = require("./displayScore");

const length = 40;
const map = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", " ", ".", ".", ".", ".", ".", ".", ".", "o", "-"],
  ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", "-", ".", ".", ".", "-", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", "-", ".", ".", ".", "-", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
  ["-", "o", ".", ".", ".", ".", ".", ".", ".", "o", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
];

const boundaries = makeBoundaries(map, length);
const pellets = makePellets(map, length);
const powerUps = makePowerUps(map, length);
const ghosts = makeGhosts();
const pacman = makePacman();

let score = {
  points: 0,
};

const lastKeyPressed = {
  key: "",
};

let animationId;
const makeBoard = () => {
  animationId = requestAnimationFrame(makeBoard);
  const board = document.querySelector("#board");
  const ctx = board.getContext("2d");
  ctx.clearRect(0, 0, board.clientWidth, board.clientHeight);

  implementBoundaries(boundaries, ctx, pacman);
  implementPellets(pellets, ctx, pacman, score, animationId);
  implementPowerUps(powerUps, ctx, pacman, score, ghosts);
  implementGhosts(ghosts, boundaries, ctx, pacman, score, animationId);
  implementPacman(lastKeyPressed, pacman, boundaries, ctx);
  displayScore(score);
};

module.exports = makeBoard;
