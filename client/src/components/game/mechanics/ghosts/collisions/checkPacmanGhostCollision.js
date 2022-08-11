import collisionConditional from "./collisionConditional";
import dealWithCollision from "./dealWithCollision";

export default function checkPacmanGhostCollision(
  ghost,
  pacman,
  score,
  animationId,
  lastKeyPressed,
  ghosts,
  name,
  mainEl,
  pellets,
  powerUps,
  level,
  killCount,
  count,
  huntingTimeout,
  callbackOne = collisionConditional,
  callbackTwo = dealWithCollision
) {
  if (callbackOne(ghost, pacman)) {
    callbackTwo(
      ghost,
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
      killCount,
      count,
      huntingTimeout
    );
  }
}
