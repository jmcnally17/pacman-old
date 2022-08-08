import startHuntingInterval from "../startHuntingInterval";

export default function resetAfterLevelUp(
  pacman,
  lastKeyPressed,
  ghosts,
  pellets,
  powerUps,
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
  pellets.forEach((pellet) => {
    pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
}
