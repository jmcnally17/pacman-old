export default function pauseAndResumeCycle(cycleTimer, variables) {
  document.addEventListener("visibilitychange", () => {
    if (variables.windowIsVisible) {
      cycleTimer.pause();
      variables.windowIsVisible = false;
    } else {
      cycleTimer.resume();
      variables.windowIsVisible = true;
    }
  });
}
