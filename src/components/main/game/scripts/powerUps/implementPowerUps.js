/* eslint-disable no-undef */
const drawPowerUp = require("./drawPowerUp");

const implementPowerUps = (powerUps, ctx) => {
  powerUps.forEach((powerUp) => {
    drawPowerUp(powerUp, ctx);
  });
};

module.exports = implementPowerUps;
