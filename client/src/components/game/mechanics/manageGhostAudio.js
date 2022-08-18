export default function manageGhostAudio(ghostAudioObjects, scaredTimer) {
  if (scaredTimer.isRunning && ghostAudioObjects[0].playing()) {
    ghostAudioObjects[0].pause();
    ghostAudioObjects[1].play();
  }
}
