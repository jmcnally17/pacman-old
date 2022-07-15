/* eslint-disable no-undef */
const collisionConditional = require("./collisionConditional");
const endGame = require("./endGame");
const resetAfterDeath = require("./resetAfterDeath");

const checkPacmanGhostCollision = (
  ghosts,
  pacman,
  score,
  animationId,
  lastKeyPressed
) => {
  ghosts.forEach((ghost) => {
    if (collisionConditional(ghost, pacman)) {
      if (!ghost.isScared) {
        if (pacman.lives <= 0) {
          endGame(animationId, score);
        } else {
          pacman.loseLife();
          resetAfterDeath(pacman, lastKeyPressed, ghosts);
        }
      } else {
        score.points += 200;
        ghost.reset();
      }
    }
  });
};

module.exports = checkPacmanGhostCollision;
