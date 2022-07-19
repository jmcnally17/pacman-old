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
  level
) {
  if (!ghost.isScared) {
    ghostAttack(
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
    score.points += 200;
    ghost.reset();
  }
}
