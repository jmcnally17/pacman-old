import saveScore from "./saveScore";
import Leaderboard from "../../../../leaderboard/leaderboard";
import resetAfterGameOver from "./resetAfterGameOver";

export default async function endGame(
  variables,
  pellets,
  powerUps,
  ghosts,
  pacman,
  cycleTimer,
  scaredTimer,
  ghostAudioObjects,
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
    scaredTimer,
    ghostAudioObjects
  );
  variables.reactRoot.render(<Leaderboard variables={variables} />);
}
