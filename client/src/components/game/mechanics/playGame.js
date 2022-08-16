import makeBoundaries from "./boundaries/makeBoundaries";
import makePellets from "./pellets/makePellets";
import makePowerUps from "./powerUps/makePowerUps";
import makeGhosts from "./ghosts/makeGhosts";
import makePacman from "./pacman/makePacman";
import CycleTimer from "../models/cycleTimer";
import ScaredTimer from "../models/scaredTimer";
import makeRetreatingTimers from "./timers/makeRetreatingTimers";
import addVisibilityDetection from "./timers/addVisibilityDetection";
import implementBoundaries from "./boundaries/implementBoundaries";
import implementGhosts from "./ghosts/implementGhosts";
import implementPacman from "./pacman/implementPacman";
import implementPellets from "./pellets/implementPellets";
import implementPowerUps from "./powerUps/implementPowerUps";
import displayLevel from "./displayLevel";
import displayLives from "./displayLives";
import displayScore from "./displayScore";

const map = [
  ["1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "2", "1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "2"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|", "|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "1", "-", "-", "2", ".", "1", "-", "-", "-", "2", ".", "|", "|", ".", "1", "-", "-", "-", "2", ".", "1", "-", "-", "2", ".", "|"],
  ["|", "o", "|", " ", " ", "|", ".", "|", " ", " ", " ", "|", ".", "|", "|", ".", "|", " ", " ", " ", "|", ".", "|", " ", " ", "|", "o", "|"],
  ["|", ".", "4", "-", "-", "3", ".", "4", "-", "-", "-", "3", ".", "4", "3", ".", "4", "-", "-", "-", "3", ".", "4", "-", "-", "3", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "1", "-", "-", "2", ".", "1", "2", ".", "1", "-", "-", "-", "-", "-", "-", "2", ".", "1", "2", ".", "1", "-", "-", "2", ".", "|"],
  ["|", ".", "4", "-", "-", "3", ".", "|", "|", ".", "4", "-", "-", "2", "1", "-", "-", "3", ".", "|", "|", ".", "4", "-", "-", "3", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", "|", "|", ".", ".", ".", ".", "|", "|", ".", ".", ".", ".", "|", "|", ".", ".", ".", ".", ".", ".", "|"],
  ["4", "-", "-", "-", "-", "2", ".", "|", "4", "-", "-", "2", " ", "|", "|", " ", "1", "-", "-", "3", "|", ".", "1", "-", "-", "-", "-", "3"],
  [" ", " ", " ", " ", " ", "|", ".", "|", "1", "-", "-", "3", " ", "4", "3", " ", "4", "-", "-", "2", "|", ".", "|", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", "|", ".", "|", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", "|", ".", "|", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", "|", ".", "|", "|", " ", "1", "-", "-", "-", "-", "-", "-", "2", " ", "|", "|", ".", "|", " ", " ", " ", " ", " "],
  ["-", "-", "-", "-", "-", "3", ".", "4", "3", " ", "|", " ", " ", " ", " ", " ", " ", "|", " ", "4", "3", ".", "4", "-", "-", "-", "-", "-"],
  [" ", " ", " ", " ", " ", " ", ".", " ", " ", " ", "|", " ", " ", " ", " ", " ", " ", "|", " ", " ", " ", ".", " ", " ", " ", " ", " ", " "],
  ["-", "-", "-", "-", "-", "2", ".", "1", "2", " ", "|", " ", " ", " ", " ", " ", " ", "|", " ", "1", "2", ".", "1", "-", "-", "-", "-", "-"],
  [" ", " ", " ", " ", " ", "|", ".", "|", "|", " ", "4", "-", "-", "-", "-", "-", "-", "3", " ", "|", "|", ".", "|", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", "|", ".", "|", "|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", "|", ".", "|", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", "|", ".", "|", "|", " ", "1", "-", "-", "-", "-", "-", "-", "2", " ", "|", "|", ".", "|", " ", " ", " ", " ", " "],
  ["1", "-", "-", "-", "-", "3", ".", "4", "3", " ", "4", "-", "-", "2", "1", "-", "-", "3", " ", "4", "3", ".", "4", "-", "-", "-", "-", "2"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|", "|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "1", "-", "-", "2", ".", "1", "-", "-", "-", "2", ".", "|", "|", ".", "1", "-", "-", "-", "2", ".", "1", "-", "-", "2", ".", "|"],
  ["|", ".", "4", "-", "2", "|", ".", "4", "-", "-", "-", "3", ".", "4", "3", ".", "4", "-", "-", "-", "3", ".", "|", "1", "-", "3", ".", "|"],
  ["|", "o", ".", ".", "|", "|", ".", ".", ".", ".", ".", ".", ".", " ", " ", ".", ".", ".", ".", ".", ".", ".", "|", "|", ".", ".", "o", "|"],
  ["4", "-", "2", ".", "|", "|", ".", "1", "2", ".", "1", "-", "-", "-", "-", "-", "-", "2", ".", "1", "2", ".", "|", "|", ".", "1", "-", "3"],
  ["1", "-", "3", ".", "4", "3", ".", "|", "|", ".", "4", "-", "-", "2", "1", "-", "-", "3", ".", "|", "|", ".", "4", "3", ".", "4", "-", "2"],
  ["|", ".", ".", ".", ".", ".", ".", "|", "|", ".", ".", ".", ".", "|", "|", ".", ".", ".", ".", "|", "|", ".", ".", ".", ".", ".", ".", "|"],
  ["|", ".", "1", "-", "-", "-", "-", "3", "4", "-", "-", "2", ".", "|", "|", ".", "1", "-", "-", "3", "4", "-", "-", "-", "-", "2", ".", "|"],
  ["|", ".", "4", "-", "-", "-", "-", "-", "-", "-", "-", "3", ".", "4", "3", ".", "4", "-", "-", "-", "-", "-", "-", "-", "-", "3", ".", "|"],
  ["|", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "|"],
  ["4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "3"],
];

const variables = {
  tileLength: 32,
  windowIsVisible: true,
  score: 0,
  lastKeyPressed: "",
  level: 1,
  playerName: "",
  reactRoot: null,
  killCount: 0,
  start: true,
  animationId: null,
}

const boundaries = makeBoundaries(map, variables);
const pellets = makePellets(map, variables);
const powerUps = makePowerUps(map, variables);
const ghosts = makeGhosts(variables);
const pacman = makePacman(variables);
const cycleTimer = new CycleTimer(ghosts);
const scaredTimer = new ScaredTimer(ghosts);
const retreatingTimers = makeRetreatingTimers(ghosts)

export default function playGame(name, reactRoot) {
  if (variables.start === true) {
    variables.playerName = name;
    variables.reactRoot = reactRoot;
    cycleTimer.start();
    addVisibilityDetection(variables, cycleTimer, scaredTimer, retreatingTimers);
    variables.start = false;
  }
  variables.animationId = requestAnimationFrame(playGame);
  const board = document.querySelector("#board");
  const ctx = board.getContext("2d");
  ctx.clearRect(0, 0, 896, 992);

  implementBoundaries(boundaries, ctx, pacman);
  implementPellets(pellets, ctx, pacman, variables, ghosts, powerUps, cycleTimer, scaredTimer);
  implementPowerUps(powerUps, ctx, pacman, variables, ghosts, scaredTimer, cycleTimer);
  implementGhosts(ghosts, boundaries, ctx, variables, pacman, pellets, powerUps, cycleTimer, scaredTimer);
  implementPacman(variables, pacman, boundaries, ctx, pellets);
  displayScore(variables);
  displayLives(pacman);
  displayLevel(variables);
};
