import drawPowerUp from "./drawPowerUp";
import eatPowerUp from "./eatPowerUp";

export default function implementPowerUps(
  powerUps,
  ctx,
  pacman,
  score,
  ghosts
) {
  powerUps.forEach((powerUp) => {
    drawPowerUp(powerUp, ctx);
    eatPowerUp(powerUp, pacman, score, ghosts);
  });
}
