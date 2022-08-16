export default function pauseAndResumeTimers(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers
) {
  document.addEventListener("visibilitychange", () => {
    if (variables.windowIsVisible) {
      variables.windowIsVisible = false;
    } else {
      variables.windowIsVisible = true;
    }
  });
}
