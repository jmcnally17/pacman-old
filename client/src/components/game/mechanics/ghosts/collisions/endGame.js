import Leaderboard from "../../../../leaderboard/leaderboard";
import resetAfterGameOver from "./resetAfterGameOver";

export default function endGame(
  variables,
  pellets,
  powerUps,
  ghosts,
  pacman,
  cycleTimer,
  scaredTimer,
  ghostAudioObjects,
  callback = resetAfterGameOver
) {
  cancelAnimationFrame(variables.animationId);
  callback(
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
