import checkLevelUpCondition from "./checkLevelUpCondition";
import drawPellet from "./drawPellet";
import eatPellet from "./eatPellet";

export default function implementPellets(
  pellets,
  ctx,
  pacman,
  score,
  lastKeyPressed,
  ghosts,
  powerUps,
  level
) {
  pellets.forEach((pellet) => {
    drawPellet(pellet, ctx);
    eatPellet(pellet, pacman, score);
  });
  checkLevelUpCondition(
    pellets,
    pacman,
    lastKeyPressed,
    ghosts,
    powerUps,
    level
  );
}
