import pauseTimers from "../timers/pauseTimers";
import resumeTimers from "../timers/resumeTimers";
import playGame from "../playGame";
import runDeathAnimation from "../ghosts/collisions/pacmanDeath/runDeathAnimation";
import runLevelUpAnimation from "../pellets/levelUpAnimation/runLevelUpAnimation";

export default function addPauseDetection(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  ghostAudioObjects,
  pacmanDeathAudio,
  levelUpAudio,
  pacman,
  ctx,
  boundaries,
  pellets,
  powerUps,
  ghosts,
  callbackOne = pauseTimers,
  callbackTwo = resumeTimers,
  callbackThree = playGame,
  callbackFour = runDeathAnimation,
  callbackFive = runLevelUpAnimation
) {
  window.addEventListener(
    "keydown",
    (variables.pauseEventListener = ({ key }) => {
      if (key === "Escape") {
        if (!variables.isGamePaused) {
          variables.isGamePaused = true;
          cancelAnimationFrame(variables.animationId);
          ghostAudioObjects[0].pause();
          ghostAudioObjects[1].pause();
          ghostAudioObjects[2].pause();
          if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.pause();
          if (levelUpAudio._state === "loaded") levelUpAudio.pause();
          callbackOne(cycleTimer, scaredTimer, retreatingTimers);
        } else {
          variables.isGamePaused = false;
          if (pacman.isShrinking) {
            callbackFour(
              variables,
              ctx,
              boundaries,
              pellets,
              powerUps,
              pacman,
              ghosts,
              cycleTimer,
              scaredTimer,
              ghostAudioObjects,
              pacmanDeathAudio
            );
          } else if (pacman.isLevellingUp) {
            callbackFive(
              variables,
              pacman,
              ghosts,
              pellets,
              powerUps,
              cycleTimer,
              scaredTimer,
              ctx,
              ghostAudioObjects,
              levelUpAudio,
              boundaries
            );
          } else {
            callbackThree(variables.playerName, variables.reactRoot);
          }
          if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.play();
          if (levelUpAudio._state === "loaded") levelUpAudio.play();
          callbackTwo(cycleTimer, scaredTimer, retreatingTimers);
        }
      }
    })
  );
}
