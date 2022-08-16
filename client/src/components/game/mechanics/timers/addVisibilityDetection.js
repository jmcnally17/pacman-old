import pauseTimers from "./pauseTimers";
import resumeTimers from "./resumeTimers";

export default function addVisibilityDetection(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  callbackOne = pauseTimers,
  callbackTwo = resumeTimers
) {
  document.addEventListener("visibilitychange", () => {
    if (variables.windowIsVisible) {
      variables.windowIsVisible = false;
      callbackOne(cycleTimer, scaredTimer, retreatingTimers);
    } else {
      variables.windowIsVisible = true;
      callbackTwo(cycleTimer, scaredTimer, retreatingTimers);
    }
  });
}
