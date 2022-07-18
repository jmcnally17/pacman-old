const collisionConditional = require("./collisionConditional");
const dealWithCollision = require("./dealWithCollision");

const checkPacmanGhostCollision = (
  ghost,
  pacman,
  score,
  animationId,
  lastKeyPressed,
  ghosts
) => {
  if (collisionConditional(ghost, pacman)) {
    dealWithCollision(
      ghost,
      pacman,
      animationId,
      score,
      lastKeyPressed,
      ghosts
    );
  }
};

module.exports = checkPacmanGhostCollision;
