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
const displayLives = require("./displayLives");

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

const score = {
  points: 0,
};

const lastKeyPressed = {
  key: "",
};

const makeBoard = () => {
  let animationId = requestAnimationFrame(makeBoard);
  const board = document.querySelector("#board");
  const ctx = board.getContext("2d");
  ctx.clearRect(0, 0, board.clientWidth, board.clientHeight);

  implementBoundaries(boundaries, ctx, pacman);
  implementPellets(
    pellets,
    ctx,
    pacman,
    score,
    lastKeyPressed,
    ghosts,
    powerUps
  );
  implementPowerUps(powerUps, ctx, pacman, score, ghosts);
  implementGhosts(
    ghosts,
    boundaries,
    ctx,
    pacman,
    score,
    animationId,
    lastKeyPressed
  );
  implementPacman(lastKeyPressed, pacman, boundaries, ctx);
  displayScore(score);
  displayLives(pacman);
};

module.exports = makeBoard;
