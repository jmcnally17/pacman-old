/* eslint-disable no-undef */
const ghostMovement = (ghosts, boundaries, ctx, hitBoundaryConditional) => {
  ghosts.forEach((ghost) => {
    const collisions = [];
    ghost.update(ctx);
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

    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      if (ghost.velocity.x > 0) ghost.prevCollisions.push("right");
      else if (ghost.velocity.x < 0) ghost.prevCollisions.push("left");
      else if (ghost.velocity.y > 0) ghost.prevCollisions.push("down");
      else if (ghost.velocity.y < 0) ghost.prevCollisions.push("up");

      const pathways = ghost.prevCollisions.filter((collision) => {
        return !collisions.includes(collision);
      });
      const direction = pathways[Math.floor(Math.random() * pathways.length)];
      if (direction === "up") {
        ghost.velocity.x = 0;
        ghost.velocity.y = -5;
      } else if (direction === "down") {
        ghost.velocity.x = 0;
        ghost.velocity.y = 5;
      } else if (direction === "right") {
        ghost.velocity.x = 5;
        ghost.velocity.y = 0;
      } else if (direction === "left") {
        ghost.velocity.x = -5;
        ghost.velocity.y = 0;
      }

      ghost.prevCollisions = [];
    }
  });
};

module.exports = ghostMovement;
