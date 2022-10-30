import pauseTimers from "../timers/pauseTimers";
import resumeTimers from "../timers/resumeTimers";
import resumeAnimation from "./resumeAnimation";

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
  callbackThree = resumeAnimation
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
          callbackThree(
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
            pacmanDeathAudio,
            levelUpAudio
          );
          if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.play();
          if (levelUpAudio._state === "loaded") levelUpAudio.play();
          callbackTwo(cycleTimer, scaredTimer, retreatingTimers);
        }
      }
    })
  );
}
