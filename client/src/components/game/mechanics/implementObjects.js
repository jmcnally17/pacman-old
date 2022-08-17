import implementBoundaries from "./boundaries/implementBoundaries";
import implementGhosts from "./ghosts/implementGhosts";
import implementPacman from "./pacman/implementPacman";
import implementPellets from "./pellets/implementPellets";
import implementPowerUps from "./powerUps/implementPowerUps";

export default function implementObjects(
  boundaries,
  ghosts,
  pacman,
  pellets,
  powerUps,
  cycleTimer,
  scaredTimer,
  ctx,
  variables,
  callbackOne = implementBoundaries,
  callbackTwo = implementPellets,
  callbackThree = implementPowerUps,
  callbackFour = implementGhosts,
  callbackFive = implementPacman
) {
  callbackOne(boundaries, ctx, pacman);
  callbackTwo(
    pellets,
    ctx,
    pacman,
    variables,
    ghosts,
    powerUps,
    cycleTimer,
    scaredTimer
  );
  callbackThree(
    powerUps,
    ctx,
    pacman,
    variables,
    ghosts,
    scaredTimer,
    cycleTimer
  );
  callbackFour(
    ghosts,
    boundaries,
    ctx,
    variables,
    pacman,
    pellets,
    powerUps,
    cycleTimer,
    scaredTimer
  );
  callbackFive(variables, pacman, boundaries, ctx, pellets);
}
