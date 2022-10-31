import runDeathAnimation from "../ghosts/collisions/pacmanDeath/runDeathAnimation";
import runLevelUpAnimation from "../pellets/levelUpAnimation/runLevelUpAnimation";
import playGame from "../playGame";

export default function resumeAnimation(
  variables,
  ctx,
  boundaries,
  pellets,
  powerUps,
  pacman,
  ghosts,
  cycleTimer,
  scaredTimer,
  audioPlayer,
  callbackOne = runDeathAnimation,
  callbackTwo = runLevelUpAnimation,
  callbackThree = playGame
) {
  if (pacman.isShrinking) {
    callbackOne(
      variables,
      ctx,
      boundaries,
      pellets,
      powerUps,
      pacman,
      ghosts,
      cycleTimer,
      scaredTimer,
      audioPlayer
    );
  } else if (pacman.isLevellingUp) {
    callbackTwo(
      variables,
      pacman,
      ghosts,
      pellets,
      powerUps,
      cycleTimer,
      scaredTimer,
      ctx,
      audioPlayer,
      boundaries
    );
  } else {
    callbackThree(variables.playerName, variables.reactRoot);
  }
}
