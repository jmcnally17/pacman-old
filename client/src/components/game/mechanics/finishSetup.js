import addDirectionDetection from "./addDirectionDetection";
import addVisibilityDetection from "./timers/addVisibilityDetection";

export default function finishSetup(
  variables,
  name,
  reactRoot,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  callbackOne = addVisibilityDetection,
  callbackTwo = addDirectionDetection
) {
  variables.playerName = name;
  variables.reactRoot = reactRoot;
  cycleTimer.start();
  callbackOne(variables, cycleTimer, scaredTimer, retreatingTimers);
  callbackTwo(variables);
  variables.start = false;
}
