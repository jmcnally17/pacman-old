/* eslint-disable no-undef */
const resetAfterLevelUp = (
  pacman,
  lastKeyPressed,
  ghosts,
  pellets,
  powerUps
) => {
  pacman.reset();
  lastKeyPressed.key = "";
  ghosts.forEach((ghost) => {
    ghost.reset();
    if (ghost.isScared) ghost.changeScaredState();
    clearTimeout(ghost.scaredTimeout);
  });
  pellets.forEach((pellet) => {
    pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
};

module.exports = resetAfterLevelUp;
