/* eslint-disable no-undef */
const drawBoundaries = (boundaries, ctx) => {
  boundaries.forEach((boundary) => {
    boundary.draw(ctx);
  });
};

module.exports = drawBoundaries;
