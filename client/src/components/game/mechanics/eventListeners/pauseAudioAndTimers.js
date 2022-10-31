import pauseAudio from "../audio/pauseAudio";
import pauseTimers from "../timers/pauseTimers";

export default function pauseAudioAndTimers(
  ghostAudioObjects,
  pacmanDeathAudio,
  levelUpAudio,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  callbackOne = pauseAudio,
  callbackTwo = pauseTimers
) {
  callbackOne(ghostAudioObjects, pacmanDeathAudio, levelUpAudio);
  callbackTwo(cycleTimer, scaredTimer, retreatingTimers);
}
