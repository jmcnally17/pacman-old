import checkLevelUpCondition from "./checkLevelUpCondition";
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
    if (!pellet.hasBeenEaten) pellet.draw(ctx);
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
