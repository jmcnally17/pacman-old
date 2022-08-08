import startHuntingInterval from "../../startHuntingInterval";

export default function resetAfterDeath(
  pacman,
  lastKeyPressed,
  ghosts,
  callback = startHuntingInterval
) {
  pacman.reset();
  lastKeyPressed.key = "";
  ghosts.forEach((ghost) => {
    ghost.reset();
    ghost.resetHuntingState();
    ghost.resetRecoveringState();
  });
  callback(ghosts);
}
