import endGame from "./endGame";
import resetAfterDeath from "./resetAfterDeath";

export default function ghostAttack(
  pacman,
  variables,
  ghosts,
  pellets,
  powerUps,
  cycleTimer,
  scaredTimer,
  ghostAudioObjects,
  callbackOne = endGame,
  callbackTwo = resetAfterDeath
) {
  cancelAnimationFrame(variables.animationId);
  if (pacman.lives <= 0) {
    callbackOne(
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
    callbackTwo(pacman, variables, ghosts, cycleTimer, scaredTimer);
  }
}
