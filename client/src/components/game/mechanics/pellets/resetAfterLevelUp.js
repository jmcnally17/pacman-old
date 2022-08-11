import startHuntingCycle from "../startHuntingCycle";

export default function resetAfterLevelUp(
  pacman,
  lastKeyPressed,
  ghosts,
  pellets,
  powerUps,
  count,
  huntingTimeout,
  callback = startHuntingCycle
) {
  pacman.reset();
  lastKeyPressed.key = "";
  count.number = 0;
  clearTimeout(huntingTimeout.timeout);
  ghosts.forEach((ghost) => {
    ghost.reset();
    ghost.resetHuntingState();
    ghost.resetRetreatingState();
  });
  callback(ghosts, count, huntingTimeout);
  pellets.forEach((pellet) => {
    pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
}
