const drawPowerUp = (powerUp, ctx) => {
  if (!powerUp.hasBeenEaten) {
    powerUp.draw(ctx);
  }
};

module.exports = drawPowerUp;
