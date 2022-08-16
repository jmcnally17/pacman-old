export default function pauseAndResumeTimers(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers
) {
  document.addEventListener("visibilitychange", () => {
    if (variables.windowIsVisible) {
      variables.windowIsVisible = false;
      cycleTimer.pause();
    } else {
      variables.windowIsVisible = true;
      cycleTimer.resume();
    }
  });
}
