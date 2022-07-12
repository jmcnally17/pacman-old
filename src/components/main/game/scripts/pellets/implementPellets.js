/* eslint-disable no-undef */
const checkWinCondition = require("./checkWinCondition");
const drawPellet = require("./drawPellet");
const eatPellet = require("./eatPellet");

const implementPellets = (pellets, ctx, pacman, score) => {
  pellets.forEach((pellet) => {
    drawPellet(pellet, ctx);
    eatPellet(pellet, pacman, score);
  });
  checkWinCondition(pellets, score);
};

module.exports = implementPellets;
