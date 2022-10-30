import pauseAudioAndTimers from "./pauseAudioAndTimers";
import resumeAudioAndTimers from "./resumeAudioAndTimers";

export default function addVisibilityDetection(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  ghostAudioObjects,
  pacmanDeathAudio,
  levelUpAudio,
  callbackOne = pauseAudioAndTimers,
  callbackTwo = resumeAudioAndTimers
) {
  window.addEventListener(
    "visibilitychange",
    (variables.visibilityEventListener = () => {
      if (!variables.isGamePaused && variables.isWindowVisible) {
        variables.isWindowVisible = false;
        callbackOne(
          ghostAudioObjects,
          pacmanDeathAudio,
          levelUpAudio,
          cycleTimer,
          scaredTimer,
          retreatingTimers
        );
      } else if (!variables.isGamePaused && !variables.isWindowVisible) {
        variables.isWindowVisible = true;
        callbackTwo(
          pacmanDeathAudio,
          levelUpAudio,
          cycleTimer,
          scaredTimer,
          retreatingTimers
        );
      }
    })
  );
}
