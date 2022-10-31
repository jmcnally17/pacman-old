import playGame from "../../../playGame";

export default function resetAfterDeath(
  pacman,
  variables,
  ghosts,
  cycleTimer,
  scaredTimer,
  audioPlayer,
  callback = playGame
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
  callback(variables.playerName, variables.reactRoot);
}
