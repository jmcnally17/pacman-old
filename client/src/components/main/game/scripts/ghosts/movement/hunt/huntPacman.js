import calculateDistance from "./calculateDistance";
import pickHuntDirection from "./pickHuntDirection";

export default function huntPacman(
  ghost,
  pacman,
  collisions,
  length,
  callbackOne = calculateDistance,
  callbackTwo = pickHuntDirection
) {
  if (ghost.velocity.x > 0) ghost.prevCollisions.push("right");
  else if (ghost.velocity.x < 0) ghost.prevCollisions.push("left");
  else if (ghost.velocity.y > 0) ghost.prevCollisions.push("down");
  else if (ghost.velocity.y < 0) ghost.prevCollisions.push("up");

  const pathways = [];
  ghost.prevCollisions.forEach((collision) => {
    if (!collisions.includes(collision)) {
      pathways.push({
        direction: collision,
      });
    }
  });
  callbackOne(pacman, ghost, pathways, length);
  callbackTwo(pathways, ghost, length);
}
