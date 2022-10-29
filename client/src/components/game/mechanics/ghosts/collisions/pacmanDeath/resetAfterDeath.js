import playGame from "../../../playGame";

export default function resetAfterDeath(
  pacman,
  variables,
  ghosts,
  cycleTimer,
  scaredTimer,
  ghostAudioObjects,
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
  ghostAudioObjects.forEach((audio) => audio.load());
  callback(variables.playerName, variables.reactRoot);
}
