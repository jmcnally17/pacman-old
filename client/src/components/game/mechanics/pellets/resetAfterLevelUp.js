export default function resetAfterLevelUp(
  pacman,
  lastKeyPressed,
  ghosts,
  pellets,
  powerUps,
  cycleTimer
) {
  pacman.reset();
  lastKeyPressed.key = "";
  cycleTimer.reset();
  ghosts.forEach((ghost) => {
    ghost.reset();
    ghost.resetHuntingState();
    ghost.resetRetreatingState();
  });
  cycleTimer.start(ghosts);
  pellets.forEach((pellet) => {
    pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
}
