/* eslint-disable no-undef */
const resetAfterLevelUp = require("./resetAfterLevelUp");

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
      resetAfterLevelUp(pacman, lastKeyPressed, ghosts, pellets, powerUps);
      console.log("Next level");
    }
  });
};

module.exports = checkLevelUpCondition;
