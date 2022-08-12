import eatPowerUp from "./eatPowerUp";

export default function implementPowerUps(
  powerUps,
  ctx,
  pacman,
  score,
  variables,
  ghosts,
  callback = eatPowerUp
) {
  powerUps.forEach((powerUp) => {
    if (!powerUp.hasBeenEaten) powerUp.update(ctx);
    callback(powerUp, pacman, score, variables, ghosts);
  });
}
