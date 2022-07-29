export default function pickHuntDirection(pathways, ghost, length) {
  let shortest = pathways[0];
  for (let i = 1; i < pathways.length; i++) {
    if (pathways[i].distance < shortest.distance) shortest = pathways[i];
  }
  if (shortest.direction === "up") {
    ghost.velocity.x = 0;
    ghost.velocity.y = -length / 8;
  } else if (shortest.direction === "left") {
    ghost.velocity.x = -length / 8;
    ghost.velocity.y = 0;
  } else if (shortest.direction === "right") {
    ghost.velocity.x = length / 8;
    ghost.velocity.y = 0;
  } else if (shortest.direction === "down") {
    ghost.velocity.x = 0;
    ghost.velocity.y = length / 8;
  }
}
