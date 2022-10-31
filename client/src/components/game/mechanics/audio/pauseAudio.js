export default function pauseAudio(
  ghostAudioObjects,
  pacmanDeathAudio,
  levelUpAudio
) {
  ghostAudioObjects[0].pause();
  ghostAudioObjects[1].pause();
  ghostAudioObjects[2].pause();
  pacmanDeathAudio.pause();
  levelUpAudio.pause();
}
