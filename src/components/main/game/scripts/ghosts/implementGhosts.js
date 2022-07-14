/* eslint-disable no-undef */
const changeGhostDirection = require("./changeGhostDirection");
const checkPacmanGhostCollision = require("./checkPacmanGhostCollision");
const updateCollisions = require("./updateCollisions");

const implementGhosts = (
  ghosts,
  boundaries,
  ctx,
  pacman,
  score,
  animationId
) => {
  ghosts.forEach((ghost) => {
    const collisions = [];
    ghost.update(ctx);
    updateCollisions(boundaries, collisions, ghost);
    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      changeGhostDirection(ghost, collisions);
    }
    checkPacmanGhostCollision(ghost, pacman, score, animationId);
  });
};

module.exports = implementGhosts;
