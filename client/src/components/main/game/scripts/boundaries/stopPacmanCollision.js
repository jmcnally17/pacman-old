const hitBoundaryConditional = require("./hitBoundaryConditional");

const stopPacmanCollision = (boundary, pacman) => {
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
};

module.exports = stopPacmanCollision;
