/* eslint-disable no-undef */
const Boundary = require("../../models/boundary");
const makeTunnelBoundaries = require("./makeTunnelBoundaries");

const makeBoundaries = (map, length) => {
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
    makeTunnelBoundaries(boundaries);
  });

  return boundaries;
};

module.exports = makeBoundaries;
