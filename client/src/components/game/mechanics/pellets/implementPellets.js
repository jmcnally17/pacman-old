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
  level,
  count,
  huntingTimeout,
  callbackOne = eatPellet,
  callbackTwo = checkLevelUpCondition
) {
  pellets.forEach((pellet) => {
    if (!pellet.hasBeenEaten) pellet.draw(ctx);
    callbackOne(pellet, pacman, score);
  });
  callbackTwo(
    pellets,
    pacman,
    lastKeyPressed,
    ghosts,
    powerUps,
    level,
    count,
    huntingTimeout
  );
}
