/* eslint-disable no-undef */
const eatPowerUp = (powerUp, pacman, score) => {
  if (
    powerUp.position.x === pacman.position.x &&
    powerUp.position.y === pacman.position.y &&
    !powerUp.hasBeenEaten
  ) {
    powerUp.changeEatenState();
    score.points += 50;
  }
};

module.exports = eatPowerUp;
