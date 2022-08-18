export default function manageGhostAudio(
  ghostAudioObjects,
  scaredTimer,
  retreatingTimers
) {
  let count = 0;
  retreatingTimers.forEach((timer) => {
    if (timer.isRunning) count++;
  });
  if (count > 0) {
    if (!ghostAudioObjects[2].playing()) {
      ghostAudioObjects[0].pause();
      ghostAudioObjects[1].pause();
      ghostAudioObjects[2].play();
    }
  } else if (scaredTimer.isRunning && !ghostAudioObjects[1].playing()) {
    ghostAudioObjects[0].pause();
    ghostAudioObjects[2].pause();
    ghostAudioObjects[1].play();
  } else if (!scaredTimer.isRunning && !ghostAudioObjects[0].playing()) {
    ghostAudioObjects[1].pause();
    ghostAudioObjects[2].pause();
    ghostAudioObjects[0].play();
  }
}
