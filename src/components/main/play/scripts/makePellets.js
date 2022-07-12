/* eslint-disable no-undef */
const Pellet = require("../models/pellet");

const makePellets = (map) => {
  const pellets = [];
  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === ".") {
        const pellet = new Pellet({
          position: {
            x: (length * (2 * j + 1)) / 2,
            y: (length * (2 * i + 1)) / 2,
          },
        });
        pellets.push(pellet);
      }
    });
  });
  return pellets;
};

module.exports = makePellets;
