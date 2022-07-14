/* eslint-disable no-undef */
const drawPowerUp = require("./drawPowerUp");
const eatPowerUp = require("./eatPowerUp");

const implementPowerUps = (powerUps, ctx, pacman, score) => {
  powerUps.forEach((powerUp) => {
    drawPowerUp(powerUp, ctx);
    eatPowerUp(powerUp, pacman, score);
  });
};

module.exports = implementPowerUps;
