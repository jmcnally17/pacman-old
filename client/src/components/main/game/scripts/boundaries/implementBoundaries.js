const stopPacmanCollision = require("./stopPacmanCollision");

const implementBoundaries = (boundaries, ctx, pacman) => {
  boundaries.forEach((boundary) => {
    boundary.draw(ctx);
    stopPacmanCollision(boundary, pacman);
  });
};

module.exports = implementBoundaries;
