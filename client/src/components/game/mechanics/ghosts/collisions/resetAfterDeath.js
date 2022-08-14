export default function resetAfterDeath(
  pacman,
  variables,
  ghosts,
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
}
