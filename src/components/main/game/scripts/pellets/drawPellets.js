/* eslint-disable no-undef */
const drawPellets = (pellets, ctx) => {
  pellets.forEach((pellet) => {
    if (!pellet.hasBeenEaten) {
      pellet.draw(ctx);
    }
  });
};

module.exports = drawPellets;
