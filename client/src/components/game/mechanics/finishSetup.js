import addVisibilityDetection from "./timers/addVisibilityDetection";

export default function finishSetup(
  variables,
  name,
  reactRoot,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  callback = addVisibilityDetection
) {
  variables.playerName = name;
  variables.reactRoot = reactRoot;
  cycleTimer.start();
  callback(variables, cycleTimer, scaredTimer, retreatingTimers);
  variables.start = false;
}
