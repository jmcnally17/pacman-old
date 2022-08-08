export default function resetAfterGameOver(
  pellets,
  powerUps,
  ghosts,
  pacman,
  lastKeyPressed,
  level
) {
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
  ghosts.forEach((ghost) => {
    ghost.reset();
    ghost.resetHuntingState();
    ghost.resetRecoveringState();
  });
  pacman.reset();
  pacman.lives = 2;
  lastKeyPressed.key = "";
  level.number = 1;
}
