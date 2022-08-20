import playGame from "../../playGame";

export default function resetAfterDeath(
  pacman,
  variables,
  ghosts,
  cycleTimer,
  scaredTimer,
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
  callback(variables.name, variables.reactRoot);
}
