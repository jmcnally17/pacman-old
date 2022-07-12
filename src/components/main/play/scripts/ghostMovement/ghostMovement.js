/* eslint-disable no-undef */
const changeGhostDirection = require("./changeGhostDirection");
const updateCollisions = require("./updateCollisions");

const ghostMovement = (ghosts, boundaries, ctx) => {
  ghosts.forEach((ghost) => {
    const collisions = [];
    ghost.update(ctx);
    updateCollisions(boundaries, collisions, ghost);
    changeGhostDirection(ghost, collisions);
  });
};

module.exports = ghostMovement;
