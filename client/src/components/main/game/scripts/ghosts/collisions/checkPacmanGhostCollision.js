import collisionConditional from "./collisionConditional";
import dealWithCollision from "./dealWithCollision";

export default function checkPacmanGhostCollision(
  ghost,
  pacman,
  score,
  animationId,
  lastKeyPressed,
  ghosts
) {
  if (collisionConditional(ghost, pacman)) {
    dealWithCollision(
      ghost,
      pacman,
      animationId,
      score,
      lastKeyPressed,
      ghosts
    );
  }
}
