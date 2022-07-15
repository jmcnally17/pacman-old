/* eslint-disable no-undef */
const endGame = require("./endGame");
const resetAfterDeath = require("./resetAfterDeath");

const checkPacmanGhostCollision = (
  ghost,
  pacman,
  score,
  ghosts,
  animationId,
  lastKeyPressed
) => {
  if (
    ghost.position.y - ghost.radius <= pacman.position.y &&
    ghost.position.y + ghost.radius >= pacman.position.y &&
    ghost.position.x + ghost.radius >= pacman.position.x &&
    ghost.position.x - ghost.radius <= pacman.position.x
  ) {
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
};

module.exports = checkPacmanGhostCollision;
