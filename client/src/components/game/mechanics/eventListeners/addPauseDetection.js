import pauseTimers from "../timers/pauseTimers";

export default function addPauseDetection(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  ghostAudioObjects,
  pacmanDeathAudio,
  levelUpAudio,
  callbackOne = pauseTimers
) {
  window.addEventListener(
    "keydown",
    (variables.pauseEventListener = ({ key }) => {
      if (key === "Escape") {
        if (!variables.isGamePaused) {
          variables.isGamePaused = true;
          ghostAudioObjects[0].pause();
          ghostAudioObjects[1].pause();
          ghostAudioObjects[2].pause();
          if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.pause();
          if (levelUpAudio._state === "loaded") levelUpAudio.pause();
          callbackOne(cycleTimer, scaredTimer, retreatingTimers);
        } else {
          variables.isGamePaused = false;
          if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.play();
          if (levelUpAudio._state === "loaded") levelUpAudio.play();
        }
      }
    })
  );
}
