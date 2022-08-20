import endGame from "./endGame";
import resetAfterDeath from "./resetAfterDeath";
import runDeathAnimation from "./runDeathAnimation";

export default function ghostAttack(
  pacman,
  variables,
  ghosts,
  pellets,
  powerUps,
  cycleTimer,
  scaredTimer,
  ghostAudioObjects,
  ctx,
  boundaries,
  callbackOne = runDeathAnimation,
  callbackTwo = endGame,
  callbackThree = resetAfterDeath
) {
  cancelAnimationFrame(variables.animationId);
  callbackOne(variables, ctx, boundaries, pellets, powerUps, pacman);
  if (pacman.lives <= 0) {
    callbackTwo(
      variables,
      pellets,
      powerUps,
      ghosts,
      pacman,
      cycleTimer,
      scaredTimer,
      ghostAudioObjects
    );
  } else {
    pacman.lives--;
    callbackThree(pacman, variables, ghosts, cycleTimer, scaredTimer);
  }
}
