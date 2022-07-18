/* eslint-disable no-undef */
const pickGhostDirection = require("./movement/pickGhostDirection");
const checkPacmanGhostCollision = require("./collisions/checkPacmanGhostCollision");
const updateCollisions = require("./movement/updateCollisions");
const implementTunnel = require("../implementTunnel");

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
    implementTunnel(ghost);
    updateCollisions(boundaries, collisions, ghost);
    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      pickGhostDirection(ghost, collisions);
    }
    checkPacmanGhostCollision(
      ghost,
      pacman,
      score,
      animationId,
      lastKeyPressed,
      ghosts
    );
  });
};

module.exports = implementGhosts;
