export default function pickHuntDirection(pathways, ghost) {
  let shortest = { distance: 10000 };
  for (let i = 0; i < pathways.length; i++) {
    if (pathways[i].distance < shortest.distance) shortest = pathways[i];
  }
  if (shortest.direction === "up") {
    ghost.velocity.x = 0;
    ghost.velocity.y = -ghost.speed;
  } else if (shortest.direction === "left") {
    ghost.velocity.x = -ghost.speed;
    ghost.velocity.y = 0;
  } else if (shortest.direction === "right") {
    ghost.velocity.x = ghost.speed;
    ghost.velocity.y = 0;
  } else if (shortest.direction === "down") {
    ghost.velocity.x = 0;
    ghost.velocity.y = ghost.speed;
  }
}
