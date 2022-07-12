/* eslint-disable no-undef */
const eatPellet = (pellets, pacman, score) => {
  pellets.forEach((pellet) => {
    if (
      pellet.position.x === pacman.position.x &&
      pellet.position.y === pacman.position.y &&
      !pellet.hasBeenEaten
    ) {
      pellet.changeEatenState(true);
      score.points += 10;
    }
  });
};

module.exports = eatPellet;
