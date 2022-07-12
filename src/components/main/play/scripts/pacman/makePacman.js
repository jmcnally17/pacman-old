/* eslint-disable no-undef */
const PacMan = require("../../models/pacman");

const makePacman = (length) => {
  const pacman = new PacMan({
    position: {
      x: (3 * length) / 2,
      y: (3 * length) / 2,
    },
    velocity: {
      x: 0,
      y: 0,
    },
  });
  return pacman;
};

module.exports = makePacman;
