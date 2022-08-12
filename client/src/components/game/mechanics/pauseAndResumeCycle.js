export default function pauseAndResumeCycle(cycleTimer, gameWindow = window) {
  gameWindow.addEventListener("blur", cycleTimer.pause);
  gameWindow.addEventListener("focus", cycleTimer.resume);
}
