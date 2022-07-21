export default function assignSprite(ghost) {
  if (ghost.velocity.x > 0) {
    ghost.image.src = `./images/${ghost.colour}GhostRight.png`;
  } else if (ghost.velocity.x < 0) {
    ghost.image.src = `./images/${ghost.colour}GhostLeft.png`;
  } else if (ghost.velocity.y < 0) {
    ghost.image.src = `./images/${ghost.colour}GhostUp.png`;
  } else if (ghost.velocity.y > 0) {
    ghost.image.src = `./images/${ghost.colour}GhostDown.png`;
  }
  if (ghost.isScared) ghost.image.src = "./images/scaredGhostBlue.png";
}
