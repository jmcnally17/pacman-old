const scareGhost = require("./scareGhost");

const eatPowerUp = (powerUp, pacman, score, ghosts) => {
  if (
    powerUp.position.x === pacman.position.x &&
    powerUp.position.y === pacman.position.y &&
    !powerUp.hasBeenEaten
  ) {
    powerUp.changeEatenState();
    score.points += 50;
    ghosts.forEach((ghost) => {
      if (!ghost.isScared) scareGhost(ghost);
    });
  }
};

module.exports = eatPowerUp;
