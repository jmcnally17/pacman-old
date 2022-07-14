/* eslint-disable no-undef */
const PacMan = require("../../models/pacman");

const makePacman = () => {
  const pacman = new PacMan({
    position: {
      x: 60,
      y: 60,
    },
    velocity: {
      x: 0,
      y: 0,
    },
  });
  return pacman;
};

module.exports = makePacman;
