/* eslint-disable no-undef */
const drawBoundaries = require("./drawBoundaries");
const stopPacmanCollision = require("./stopPacmanCollision");

const implementBoundaries = (boundaries, ctx, pacman) => {
  drawBoundaries(boundaries, ctx);
  stopPacmanCollision(boundaries, pacman);
};

module.exports = implementBoundaries;
