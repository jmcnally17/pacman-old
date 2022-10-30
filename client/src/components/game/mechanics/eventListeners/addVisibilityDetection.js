import pauseTimers from "../timers/pauseTimers";
import resumeTimers from "../timers/resumeTimers";

export default function addVisibilityDetection(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  ghostAudioObjects,
  pacmanDeathAudio,
  levelUpAudio,
  callbackOne = pauseTimers,
  callbackTwo = resumeTimers
) {
  window.addEventListener(
    "visibilitychange",
    (variables.visibilityEventListener = () => {
      if (!variables.isGamePaused && variables.isWindowVisible) {
        variables.isWindowVisible = false;
        ghostAudioObjects[0].pause();
        ghostAudioObjects[1].pause();
        ghostAudioObjects[2].pause();
        if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.pause();
        if (levelUpAudio._state === "loaded") levelUpAudio.pause();
        callbackOne(cycleTimer, scaredTimer, retreatingTimers);
      } else if (!variables.isGamePaused && !variables.isWindowVisible) {
        variables.isWindowVisible = true;
        if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.play();
        if (levelUpAudio._state === "loaded") levelUpAudio.play();
        callbackTwo(cycleTimer, scaredTimer, retreatingTimers);
      }
    })
  );
}
