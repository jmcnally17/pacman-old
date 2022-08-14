export default function resetAfterLevelUp(
  pacman,
  variables,
  ghosts,
  pellets,
  powerUps,
  cycleTimer,
  scaredTimer
) {
  pacman.reset();
  variables.lastKeyPressed = "";
  cycleTimer.reset();
  scaredTimer.reset();
  ghosts.forEach((ghost) => {
    ghost.reset();
  });
  cycleTimer.start();
  pellets.forEach((pellet) => {
    pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
}
