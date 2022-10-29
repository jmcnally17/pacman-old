export default function addPauseDetection(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  ghostAudioObjects,
  pacmanDeathAudio
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
        } else {
          variables.isGamePaused = false;
        }
      }
    })
  );
}
