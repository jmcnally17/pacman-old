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
  if (ghost.isRecovering) {
    if (ghost.velocity.x > 0) {
      ghost.image.src = `./images/eyesRight.png`;
    } else if (ghost.velocity.x < 0) {
      ghost.image.src = `./images/eyesLeft.png`;
    } else if (ghost.velocity.y < 0) {
      ghost.image.src = `./images/eyesUp.png`;
    } else if (ghost.velocity.y > 0) {
      ghost.image.src = `./images/eyesDown.png`;
    }
  }
}
