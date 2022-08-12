export default function resetAfterLevelUp(
  pacman,
  variables,
  ghosts,
  pellets,
  powerUps,
  cycleTimer
) {
  pacman.reset();
  variables.lastKeyPressed = "";
  cycleTimer.reset();
  ghosts.forEach((ghost) => {
    ghost.reset();
    ghost.resetHuntingState();
    ghost.resetRetreatingState();
  });
  cycleTimer.start();
  pellets.forEach((pellet) => {
    pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
}
