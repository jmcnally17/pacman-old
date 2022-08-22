import playGame from "../playGame";

export default function resetAfterLevelUp(
  pacman,
  variables,
  ghosts,
  pellets,
  powerUps,
  cycleTimer,
  scaredTimer,
  callback = playGame
) {
  pacman.reset();
  variables.lastKeyPressed = "";
  variables.levelUpCount = 0;
  cycleTimer.reset();
  scaredTimer.reset();
  ghosts.forEach((ghost) => {
    ghost.reset();
  });
  pellets.forEach((pellet) => {
    pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
  cycleTimer.start();
  callback();
}
