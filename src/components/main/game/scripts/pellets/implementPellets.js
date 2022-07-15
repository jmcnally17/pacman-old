/* eslint-disable no-undef */
const checkLevelUpCondition = require("./checkLevelUpCondition");
const drawPellet = require("./drawPellet");
const eatPellet = require("./eatPellet");

const implementPellets = (
  pellets,
  ctx,
  pacman,
  score,
  lastKeyPressed,
  ghosts,
  powerUps
) => {
  pellets.forEach((pellet) => {
    drawPellet(pellet, ctx);
    eatPellet(pellet, pacman, score);
  });
  checkLevelUpCondition(pellets, pacman, lastKeyPressed, ghosts, powerUps);
};

module.exports = implementPellets;
