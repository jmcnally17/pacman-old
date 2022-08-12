import endGame from "./endGame";
import resetAfterDeath from "./resetAfterDeath";

export default function ghostAttack(
  pacman,
  variables,
  ghosts,
  pellets,
  powerUps,
  cycleTimer,
  callbackOne = endGame,
  callbackTwo = resetAfterDeath
) {
  if (pacman.lives <= 0) {
    callbackOne(variables, pellets, powerUps, ghosts, pacman, cycleTimer);
  } else {
    pacman.lives--;
    callbackTwo(pacman, variables, ghosts, cycleTimer);
  }
}
