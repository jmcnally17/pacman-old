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
  level
) {
  if (pacman.lives <= 0) {
    endGame(
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
    pacman.loseLife();
    resetAfterDeath(pacman, lastKeyPressed, ghosts);
  }
}
