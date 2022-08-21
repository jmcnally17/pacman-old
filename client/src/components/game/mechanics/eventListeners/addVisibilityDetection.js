import pauseTimers from "../timers/pauseTimers";
import resumeTimers from "../timers/resumeTimers";

export default function addVisibilityDetection(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  ghostAudioObjects,
  pacmanDeathAudio,
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
        callbackOne(cycleTimer, scaredTimer, retreatingTimers);
      } else {
        variables.windowIsVisible = true;
        if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.play();
        callbackTwo(cycleTimer, scaredTimer, retreatingTimers);
      }
    })
  );
}
