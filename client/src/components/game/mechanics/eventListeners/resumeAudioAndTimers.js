import resumeAudio from "../audio/resumeAudio";
import resumeTimers from "../timers/resumeTimers";

export default function resumeAudioAndTimers(
  pacmanDeathAudio,
  levelUpAudio,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  callbackOne = resumeAudio,
  callbackTwo = resumeTimers
) {
  callbackOne(pacmanDeathAudio, levelUpAudio);
  callbackTwo(cycleTimer, scaredTimer, retreatingTimers);
}
