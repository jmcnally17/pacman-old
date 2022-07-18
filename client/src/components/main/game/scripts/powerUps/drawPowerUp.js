export default function drawPowerUp(powerUp, ctx) {
  if (!powerUp.hasBeenEaten) {
    powerUp.draw(ctx);
  }
}
