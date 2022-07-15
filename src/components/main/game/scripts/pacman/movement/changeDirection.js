/* eslint-disable no-undef */
const checkDirectionChange = require("./checkDirectionChange");

const changeDirection = (lastKeyPressed, pacman, boundaries) => {
  if (lastKeyPressed.key === "up") {
    checkDirectionChange(pacman, boundaries, {
      velocity: {
        x: 0,
        y: -pacman.speed,
      },
    });
  } else if (lastKeyPressed.key === "down") {
    checkDirectionChange(pacman, boundaries, {
      velocity: {
        x: 0,
        y: pacman.speed,
      },
    });
  } else if (lastKeyPressed.key === "right") {
    checkDirectionChange(pacman, boundaries, {
      velocity: {
        x: pacman.speed,
        y: 0,
      },
    });
  } else if (lastKeyPressed.key === "left") {
    checkDirectionChange(pacman, boundaries, {
      velocity: {
        x: -pacman.speed,
        y: 0,
      },
    });
  }
};

module.exports = changeDirection;
