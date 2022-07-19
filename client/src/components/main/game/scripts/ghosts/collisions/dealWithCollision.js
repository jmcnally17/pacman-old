import ghostAttack from "./ghostAttack";

export default function dealWithCollision(
  ghost,
  pacman,
  animationId,
  score,
  lastKeyPressed,
  ghosts,
  name,
  mainEl
) {
  if (!ghost.isScared) {
    ghostAttack(
      pacman,
      animationId,
      score,
      lastKeyPressed,
      ghosts,
      name,
      mainEl
    );
  } else {
    score.points += 200;
    ghost.reset();
  }
}
