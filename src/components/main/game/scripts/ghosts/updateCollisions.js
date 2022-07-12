/* eslint-disable no-undef */
const hitBoundaryConditional = require("../boundaries/hitBoundaryConditional");

const updateCollisions = (boundaries, collisions, ghost) => {
  boundaries.forEach((boundary) => {
    if (
      !collisions.includes("down") &&
      hitBoundaryConditional(ghost, boundary, {
        velocity: {
          x: 0,
          y: 5,
        },
      })
    ) {
      collisions.push("down");
    } else if (
      !collisions.includes("right") &&
      hitBoundaryConditional(ghost, boundary, {
        velocity: {
          x: 5,
          y: 0,
        },
      })
    ) {
      collisions.push("right");
    } else if (
      !collisions.includes("left") &&
      hitBoundaryConditional(ghost, boundary, {
        velocity: {
          x: -5,
          y: 0,
        },
      })
    ) {
      collisions.push("left");
    } else if (
      !collisions.includes("up") &&
      hitBoundaryConditional(ghost, boundary, {
        velocity: {
          x: 0,
          y: -5,
        },
      })
    ) {
      collisions.push("up");
    }
  });
  if (collisions.length > ghost.prevCollisions) {
    ghost.prevCollisions = collisions;
  }
};

module.exports = updateCollisions;
