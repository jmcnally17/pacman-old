import ghostAttack from "./ghostAttack";

export default function dealWithCollision(
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
  callback = ghostAttack
) {
  if (!ghost.isScared && !ghost.isRecovering) {
    callback(
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
    );
  } else if (ghost.isScared && !ghost.isRecovering) {
    score.points += 200 * Math.pow(2, killCount.number);
    killCount.number++;
    ghost.changeRecoveringState();
    ghost.recoveringTimeout = setTimeout(() => {
      ghost.changeRecoveringState();
    }, 2000);
    ghost.changeScaredState();
    clearTimeout(ghost.scaredTimeout);
  }
}
