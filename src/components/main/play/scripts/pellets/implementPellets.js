/* eslint-disable no-undef */
const checkWinCondition = require("./checkWinCondition");
const drawPellets = require("./drawPellets");
const eatPellet = require("./eatPellet");

const implementPellets = (pellets, ctx, pacman, score) => {
  drawPellets(pellets, ctx);
  eatPellet(pellets, pacman, score);
  checkWinCondition(pellets, score);
};

module.exports = implementPellets;
