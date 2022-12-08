import playGame from "../../../playGame";

export default function resetAfterDeath(
  pacman,
  variables,
  ghosts,
  cycleTimer,
  scaredTimer,
  callbackOne = playGame
) {
  pacman.reset();
  variables.lastKeyPressed = "";
  cycleTimer.reset();
  scaredTimer.reset();
  ghosts.forEach((ghost) => {
    ghost.reset();
  });
  cycleTimer.start();
  callbackOne(variables.playerName, variables.reactRoot);
}
