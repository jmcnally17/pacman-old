export default function assignRecoveringSprite(ghost) {
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
