import Leaderboard from "../../../../leaderboard/leaderboard";
import resetAfterGameOver from "./resetAfterGameOver";
import saveScore from "./saveScore";

export default async function endGame(
  variables,
  pellets,
  powerUps,
  ghosts,
  pacman,
  cycleTimer,
  scaredTimer,
  callbackOne = saveScore,
  callbackTwo = resetAfterGameOver
) {
  cancelAnimationFrame(variables.animationId);
  await callbackOne(variables);
  callbackTwo(
    pellets,
    powerUps,
    ghosts,
    pacman,
    variables,
    cycleTimer,
    scaredTimer
  );
  variables.reactRoot.render(<Leaderboard variables={variables} />);
}
