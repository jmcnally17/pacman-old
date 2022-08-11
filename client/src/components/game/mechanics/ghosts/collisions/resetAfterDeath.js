import startHuntingInterval from "../../startHuntingInterval";

export default function resetAfterDeath(
  pacman,
  lastKeyPressed,
  ghosts,
  count,
  huntingTimeout,
  callback = startHuntingInterval
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
