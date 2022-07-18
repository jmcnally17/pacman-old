const drawPowerUp = require("./drawPowerUp");
const eatPowerUp = require("./eatPowerUp");

const implementPowerUps = (powerUps, ctx, pacman, score, ghosts) => {
  powerUps.forEach((powerUp) => {
    drawPowerUp(powerUp, ctx);
    eatPowerUp(powerUp, pacman, score, ghosts);
  });
};

module.exports = implementPowerUps;
