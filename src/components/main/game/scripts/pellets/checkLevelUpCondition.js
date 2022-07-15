/* eslint-disable no-undef */
const checkLevelUpCondition = (
  pellets,
  pacman,
  lastKeyPressed,
  ghosts,
  powerUps
) => {
  let count = 0;
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) {
      count++;
    }
    if (count === pellets.length) {
      pacman.reset();
      lastKeyPressed.key = "";
      ghosts.forEach((ghost) => {
        ghost.reset();
      });
      pellets.forEach((pellet) => {
        pellet.changeEatenState();
      });
      powerUps.forEach((powerUp) => {
        if (powerUp.hasBeenEaten) powerUp.changeEatenState();
      });
      console.log("Next level");
    }
  });
};

module.exports = checkLevelUpCondition;
