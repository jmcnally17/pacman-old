import addDirectionDetection from "./eventListeners/addDirectionDetection";
import addVisibilityDetection from "./eventListeners/addVisibilityDetection";

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
  callbackTwo(
    variables,
    cycleTimer,
    scaredTimer,
    retreatingTimers,
    ghostAudioObjects
  );
  variables.start = false;
  ghostAudioObjects[0].load();
  ghostAudioObjects[0].play();
  ghostAudioObjects[1].load();
  ghostAudioObjects[2].load();
}
