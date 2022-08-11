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
  count,
  huntingTimeout,
  callbackOne = cancelAnimationFrame,
  callbackTwo = saveScore,
  callbackThree = resetAfterGameOver
) {
  callbackOne(animationId);
  callbackTwo(score, name);
  callbackThree(
    pellets,
    powerUps,
    ghosts,
    pacman,
    lastKeyPressed,
    level,
    count,
    huntingTimeout
  );
  mainEl.render(
    <Leaderboard
      score={score}
      mainEl={mainEl}
      name={name}
      ghosts={ghosts}
      count={count}
      huntingTimeout={huntingTimeout}
    />
  );
}
