export default function resetAfterGameOver(
  pellets,
  powerUps,
  ghosts,
  pacman,
  lastKeyPressed,
  level,
  count,
  huntingTimeout
) {
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
  count.number = 0;
  clearTimeout(huntingTimeout.timeout);
  ghosts.forEach((ghost) => {
    ghost.reset();
    ghost.resetHuntingState();
    ghost.resetRetreatingState();
  });
  pacman.reset();
  pacman.lives = 2;
  lastKeyPressed.key = "";
  level.number = 1;
}
