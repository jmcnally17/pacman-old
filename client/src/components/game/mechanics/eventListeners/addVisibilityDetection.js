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
  document.addEventListener(
    "visibilitychange",
    (variables.visibilityEventListener = () => {
      if (variables.windowIsVisible) {
        variables.windowIsVisible = false;
        ghostAudioObjects[0].pause();
        ghostAudioObjects[1].pause();
        ghostAudioObjects[2].pause();
        if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.pause();
        if (levelUpAudio._state === "loaded") levelUpAudio.pause();
        callbackOne(cycleTimer, scaredTimer, retreatingTimers);
      } else {
        variables.windowIsVisible = true;
        if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.play();
        if (levelUpAudio._state === "loaded") levelUpAudio.play();
        callbackTwo(cycleTimer, scaredTimer, retreatingTimers);
      }
    })
  );
}
