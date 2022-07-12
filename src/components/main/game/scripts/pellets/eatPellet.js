/* eslint-disable no-undef */
const eatPellet = (pellet, pacman, score) => {
  if (
    pellet.position.x === pacman.position.x &&
    pellet.position.y === pacman.position.y &&
    !pellet.hasBeenEaten
  ) {
    pellet.changeEatenState(true);
    score.points += 10;
  }
};

module.exports = eatPellet;
