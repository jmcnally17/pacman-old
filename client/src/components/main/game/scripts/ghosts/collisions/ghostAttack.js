const endGame = require("./endGame");
const resetAfterDeath = require("./resetAfterDeath");

const ghostAttack = (pacman, animationId, score, lastKeyPressed, ghosts) => {
  if (pacman.lives <= 0) {
    endGame(animationId, score);
  } else {
    pacman.loseLife();
    resetAfterDeath(pacman, lastKeyPressed, ghosts);
  }
};

module.exports = ghostAttack;
