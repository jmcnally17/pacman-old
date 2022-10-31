import pauseTimers from "../timers/pauseTimers";

export default function pauseAudioAndTimers(
  ghostAudioObjects,
  pacmanDeathAudio,
  levelUpAudio,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  callback = pauseTimers
) {
  ghostAudioObjects[0].pause();
  ghostAudioObjects[1].pause();
  ghostAudioObjects[2].pause();
  pacmanDeathAudio.pause();
  levelUpAudio.pause();
  callback(cycleTimer, scaredTimer, retreatingTimers);
}
