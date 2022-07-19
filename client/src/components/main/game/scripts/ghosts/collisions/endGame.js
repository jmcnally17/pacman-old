import saveScore from "./saveScore";
import Leaderboard from "../../../../leaderboard/leaderboard";
import resetAfterGameOver from "./resetAfterGameOver";

export default function endGame(
  animationId,
  score,
  name,
  mainEl,
  pellets,
  powerUps,
  ghosts,
  pacman,
  lastKeyPressed,
  level
) {
  cancelAnimationFrame(animationId);
  saveScore(score, name);
  resetAfterGameOver(pellets, powerUps, ghosts, pacman, lastKeyPressed, level);
  mainEl.render(<Leaderboard score={score} mainEl={mainEl} name={name} />);
}
