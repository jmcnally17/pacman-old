export default function eatPellet(pellet, pacman, variables) {
  if (
    pellet.position.x === pacman.position.x &&
    pellet.position.y === pacman.position.y &&
    !pellet.hasBeenEaten
  ) {
    pellet.changeEatenState();
    variables.score += 10;
  }
}
