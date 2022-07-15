/* eslint-disable no-undef */
const pickGhostDirection = (ghost, collisions) => {
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
    ghost.velocity.y = -ghost.speed;
  } else if (direction === "down") {
    ghost.velocity.x = 0;
    ghost.velocity.y = ghost.speed;
  } else if (direction === "right") {
    ghost.velocity.x = ghost.speed;
    ghost.velocity.y = 0;
  } else if (direction === "left") {
    ghost.velocity.x = -ghost.speed;
    ghost.velocity.y = 0;
  }
  ghost.prevCollisions = [];
};
module.exports = pickGhostDirection;
