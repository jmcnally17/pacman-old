/* eslint-disable no-undef */
const hitBoundaryConditional = require("../boundaries/hitBoundaryConditional");

const checkDirectionChange = (pacman, boundaries, { velocity }) => {
  let count = 0;
  for (let i = 0; i < boundaries.length; i++) {
    if (hitBoundaryConditional(pacman, boundaries[i], { velocity })) {
      count++;
    }
  }
  if (count === 0) {
    pacman.velocity.x = velocity.x;
    pacman.velocity.y = velocity.y;
  }
};

module.exports = checkDirectionChange;