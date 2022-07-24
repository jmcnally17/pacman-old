import eatPowerUp from "./eatPowerUp";

export default function implementPowerUps(
  powerUps,
  ctx,
  pacman,
  score,
  ghosts
) {
  powerUps.forEach((powerUp) => {
    if (!powerUp.hasBeenEaten) powerUp.draw(ctx);
    eatPowerUp(powerUp, pacman, score, ghosts);
  });
}
