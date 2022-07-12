/* eslint-disable no-undef */
const hitBoundaryConditional = require("./hitBoundaryConditional");

const stopPacmanCollision = (boundaries, pacman) => {
  boundaries.forEach((boundary) => {
    if (
      hitBoundaryConditional(pacman, boundary, {
        velocity: {
          x: pacman.velocity.x,
          y: pacman.velocity.y,
        },
      })
    ) {
      pacman.velocity.x = 0;
      pacman.velocity.y = 0;
    }
  });
};

module.exports = stopPacmanCollision;
