export default function eatPellet(pellet, pacman, score) {
  if (
    pellet.position.x === pacman.position.x &&
    pellet.position.y === pacman.position.y &&
    !pellet.hasBeenEaten
  ) {
    pellet.changeEatenState();
    score.points += 10;
  }
}
