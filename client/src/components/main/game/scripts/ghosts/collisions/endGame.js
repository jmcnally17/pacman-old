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
  level,
  callbackOne = cancelAnimationFrame,
  callbackTwo = saveScore,
  callbackThree = resetAfterGameOver
) {
  callbackOne(animationId);
  callbackTwo(score, name);
  callbackThree(pellets, powerUps, ghosts, pacman, lastKeyPressed, level);
  mainEl.render(<Leaderboard score={score} mainEl={mainEl} name={name} />);
}
