import saveScore from "./saveScore";
import Leaderboard from "../../../../leaderboard/leaderboard";
import resetAfterGameOver from "./resetAfterGameOver";

export default function endGame(
  variables,
  pellets,
  powerUps,
  ghosts,
  pacman,
  cycleTimer,
  callbackOne = cancelAnimationFrame,
  callbackTwo = saveScore,
  callbackThree = resetAfterGameOver
) {
  callbackOne(variables.animationId);
  callbackTwo(variables);
  callbackThree(pellets, powerUps, ghosts, pacman, variables, cycleTimer);
  variables.reactRoot.render(
    <Leaderboard
      score={variables.score}
      reactRoot={variables.reactRoot}
      name={variables.playerName}
      ghosts={ghosts}
      cycleTimer={cycleTimer}
    />
  );
}
