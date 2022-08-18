import addDirectionDetection from "./addDirectionDetection";
import addVisibilityDetection from "./timers/addVisibilityDetection";

export default function finishSetup(
  variables,
  name,
  reactRoot,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  callbackOne = addDirectionDetection,
  callbackTwo = addVisibilityDetection
) {
  variables.playerName = name;
  variables.reactRoot = reactRoot;
  cycleTimer.start();
  variables.directionEventListener = callbackOne(variables);
  variables.visibilityEventListener = callbackTwo(
    variables,
    cycleTimer,
    scaredTimer,
    retreatingTimers
  );
  variables.start = false;
}
