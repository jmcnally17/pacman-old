/* eslint-disable no-undef */
const pickGhostDirection = require("./pickGhostDirection");
const checkPacmanGhostCollision = require("./checkPacmanGhostCollision");
const updateCollisions = require("./updateCollisions");

const implementGhosts = (
  ghosts,
  boundaries,
  ctx,
  pacman,
  score,
  animationId,
  lastKeyPressed
) => {
  ghosts.forEach((ghost) => {
    const collisions = [];
    ghost.update(ctx);
    updateCollisions(boundaries, collisions, ghost);
    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      pickGhostDirection(ghost, collisions);
    }
    checkPacmanGhostCollision(
      ghost,
      pacman,
      score,
      ghosts,
      animationId,
      lastKeyPressed
    );
  });
};

module.exports = implementGhosts;
