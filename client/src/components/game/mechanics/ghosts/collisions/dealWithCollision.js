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
  cycleTimer,
  callback = ghostAttack
) {
  if (!ghost.isScared && !ghost.isRetreating) {
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
      level,
      cycleTimer
    );
  } else if (ghost.isScared && !ghost.isRetreating) {
    score.points += 200 * Math.pow(2, killCount.number);
    killCount.number++;
    ghost.changeRetreatingState();
    ghost.retreatingTimeout = setTimeout(() => {
      ghost.changeRetreatingState();
    }, 3000);
    ghost.changeScaredState();
    clearTimeout(ghost.scaredTimeout);
  }
}
