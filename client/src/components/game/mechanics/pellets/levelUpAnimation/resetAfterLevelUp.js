import playGame from "../../playGame";

export default function resetAfterLevelUp(
  pacman,
  variables,
  ghosts,
  pellets,
  powerUps,
  cycleTimer,
  scaredTimer,
  ghostAudioObjects,
  callback = playGame
) {
  pacman.reset();
  variables.lastKeyPressed = "";
  variables.levelUpCount = 0;
  cycleTimer.reset();
  scaredTimer.reset();
  scaredTimer.duration -= 500;
  ghosts.forEach((ghost) => {
    ghost.reset();
  });
  pellets.forEach((pellet) => {
    pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
  ghostAudioObjects.forEach((audio) => audio.load());
  cycleTimer.start();
  callback();
}
