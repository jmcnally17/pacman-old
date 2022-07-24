import eatPowerUp from "./eatPowerUp";

export default function implementPowerUps(
  powerUps,
  ctx,
  pacman,
  score,
  ghosts,
  callback = eatPowerUp
) {
  powerUps.forEach((powerUp) => {
    if (!powerUp.hasBeenEaten) powerUp.draw(ctx);
    callback(powerUp, pacman, score, ghosts);
  });
}
