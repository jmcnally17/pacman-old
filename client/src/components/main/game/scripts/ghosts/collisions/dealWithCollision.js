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
  if (!ghost.isScared) {
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
  } else {
    score.points += 200 * Math.pow(2, killCount.number);
    killCount.number++;
    ghost.reset();
  }
}
