import removeLife from "../../../display/removeLife";
import playGame from "../../../playGame";

export default function resetAfterDeath(
  pacman,
  variables,
  ghosts,
  cycleTimer,
  scaredTimer,
  audioPlayer,
  callbackOne = removeLife,
  callbackTwo = playGame
) {
  pacman.reset();
  variables.lastKeyPressed = "";
  cycleTimer.reset();
  scaredTimer.reset();
  ghosts.forEach((ghost) => {
    ghost.reset();
  });
  cycleTimer.start();
  audioPlayer.loadGhost();
  callbackOne(pacman);
  callbackTwo(variables.playerName, variables.reactRoot);
}
