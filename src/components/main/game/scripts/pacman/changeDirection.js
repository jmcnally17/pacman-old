/* eslint-disable no-undef */
const hitBoundaryConditional = require("../boundaries/hitBoundaryConditional");

const changeDirection = (lastKeyPressed, pacman, boundaries) => {
  if (lastKeyPressed.key === "up") {
    checkDirectionChange(pacman, boundaries, {
      velocity: {
        x: 0,
        y: -5,
      },
    });
  } else if (lastKeyPressed.key === "down") {
    checkDirectionChange(pacman, boundaries, {
      velocity: {
        x: 0,
        y: 5,
      },
    });
  } else if (lastKeyPressed.key === "right") {
    checkDirectionChange(pacman, boundaries, {
      velocity: {
        x: 5,
        y: 0,
      },
    });
  } else if (lastKeyPressed.key === "left") {
    checkDirectionChange(pacman, boundaries, {
      velocity: {
        x: -5,
        y: 0,
      },
    });
  }
};

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

module.exports = changeDirection;
