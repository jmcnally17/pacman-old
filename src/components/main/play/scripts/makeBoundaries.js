/* eslint-disable no-undef */
const Boundary = require("../models/boundary");

const makeBoundaries = (map) => {
  const boundaries = [];
  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === "-") {
        const boundary = new Boundary({
          position: {
            x: length * j,
            y: length * i,
          },
        });
        boundaries.push(boundary);
      }
    });
  });
  return boundaries;
};

module.exports = makeBoundaries;
