import endGame from "./endGame";
import resetAfterDeath from "./resetAfterDeath";

export default function ghostAttack(
  pacman,
  animationId,
  score,
  lastKeyPressed,
  ghosts,
  name,
  mainEl,
  pellets,
  powerUps,
  level,
  callbackOne = endGame,
  callbackTwo = resetAfterDeath
) {
  if (pacman.lives <= 0) {
    callbackOne(
      animationId,
      score,
      name,
      mainEl,
      pellets,
      powerUps,
      ghosts,
      pacman,
      lastKeyPressed,
      level
    );
  } else {
    pacman.lives--;
    callbackTwo(pacman, lastKeyPressed, ghosts);
  }
}
