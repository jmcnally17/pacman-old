export default function resetAfterGameOver(
  pellets,
  powerUps,
  ghosts,
  pacman,
  variables,
  cycleTimer,
  scaredTimer,
  ghostAudioObjects
) {
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
  cycleTimer.reset();
  scaredTimer.reset();
  ghosts.forEach((ghost) => {
    ghost.reset();
  });
  pacman.reset();
  pacman.lives = 2;
  variables.lastKeyPressed = "";
  variables.level = 1;
  window.removeEventListener("keydown", variables.directionEventListener);
  document.removeEventListener(
    "visibilitychange",
    variables.visibilityEventListener
  );
  ghostAudioObjects[0].unload();
}
