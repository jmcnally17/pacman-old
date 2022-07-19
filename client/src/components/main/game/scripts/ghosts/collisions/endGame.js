import saveScore from "./saveScore";

export default function endGame(animationId, score, name) {
  cancelAnimationFrame(animationId);
  console.log(`Game Over!\nYou scored ${score.points} points.`);
  saveScore(score, name);
}
