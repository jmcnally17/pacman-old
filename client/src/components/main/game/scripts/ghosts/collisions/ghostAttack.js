import endGame from "./endGame";
import resetAfterDeath from "./resetAfterDeath";

export default function ghostAttack(
  pacman,
  animationId,
  score,
  lastKeyPressed,
  ghosts
) {
  if (pacman.lives <= 0) {
    endGame(animationId, score);
  } else {
    pacman.loseLife();
    resetAfterDeath(pacman, lastKeyPressed, ghosts);
  }
}
