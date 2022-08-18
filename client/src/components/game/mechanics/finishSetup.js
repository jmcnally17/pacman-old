import addDirectionDetection from "./addDirectionDetection";
import addVisibilityDetection from "./timers/addVisibilityDetection";

export default function finishSetup(
  variables,
  name,
  reactRoot,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  ghostAudioObjects,
  callbackOne = addDirectionDetection,
  callbackTwo = addVisibilityDetection
) {
  variables.playerName = name;
  variables.reactRoot = reactRoot;
  cycleTimer.start();
  callbackOne(variables);
  callbackTwo(variables, cycleTimer, scaredTimer, retreatingTimers);
  variables.start = false;
  ghostAudioObjects[0].play();
}
