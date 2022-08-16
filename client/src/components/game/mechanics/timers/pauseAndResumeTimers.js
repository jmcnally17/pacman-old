export default function pauseAndResumeTimers(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers
) {
  document.addEventListener("visibilitychange", () => {
    if (variables.windowIsVisible) {
      variables.windowIsVisible = false;
      if (scaredTimer.isRunning) scaredTimer.pause();
      else cycleTimer.pause();
    } else {
      variables.windowIsVisible = true;
      if (scaredTimer.isRunning) scaredTimer.resume();
      else cycleTimer.resume();
    }
  });
}
