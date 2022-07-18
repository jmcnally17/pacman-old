const drawPellet = (pellet, ctx) => {
  if (!pellet.hasBeenEaten) {
    pellet.draw(ctx);
  }
};

module.exports = drawPellet;
