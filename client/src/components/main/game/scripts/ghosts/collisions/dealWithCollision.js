import ghostAttack from "./ghostAttack";

export default function dealWithCollision(
  ghost,
  pacman,
  animationId,
  score,
  lastKeyPressed,
  ghosts
) {
  if (!ghost.isScared) {
    ghostAttack(pacman, animationId, score, lastKeyPressed, ghosts);
  } else {
    score.points += 200;
    ghost.reset();
  }
}
