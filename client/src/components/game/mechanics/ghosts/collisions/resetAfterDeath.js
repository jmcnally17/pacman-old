export default function resetAfterDeath(
  pacman,
  lastKeyPressed,
  ghosts,
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
}
