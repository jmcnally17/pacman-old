/* eslint-disable no-undef */
const changeGhostDirection = require("./changeGhostDirection");
const updateCollisions = require("./updateCollisions");

const implementGhosts = (ghosts, boundaries, ctx) => {
  ghosts.forEach((ghost) => {
    const collisions = [];
    ghost.update(ctx);
    updateCollisions(boundaries, collisions, ghost);
    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      changeGhostDirection(ghost, collisions);
    }
  });
};

module.exports = implementGhosts;
