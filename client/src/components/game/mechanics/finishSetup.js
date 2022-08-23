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
  pacmanDeathAudio,
  levelUpAudio,
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
    ghostAudioObjects,
    pacmanDeathAudio,
    levelUpAudio
  );
  variables.start = false;
  ghostAudioObjects.forEach((audio) => audio.load());
  ghostAudioObjects[0].play();
  pacmanDeathAudio.unload();
  levelUpAudio.unload();
}
