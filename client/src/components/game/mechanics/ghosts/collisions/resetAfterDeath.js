export default function resetAfterDeath(pacman, variables, ghosts, cycleTimer) {
  pacman.reset();
  variables.lastKeyPressed = "";
  cycleTimer.reset();
  ghosts.forEach((ghost) => {
    ghost.reset();
    ghost.resetHuntingState();
    ghost.resetRetreatingState();
  });
  cycleTimer.start();
}
