import startHuntingCycle from "../../startHuntingCycle";

export default function resetAfterDeath(
  pacman,
  lastKeyPressed,
  ghosts,
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
}
