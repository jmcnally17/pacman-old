import saveScore from "./saveScore";
import Leaderboard from "../../../../leaderboard/leaderboard";

export default function endGame(animationId, score, name, mainEl) {
  cancelAnimationFrame(animationId);
  saveScore(score, name);
  mainEl.render(<Leaderboard points={score.points} />);
}
