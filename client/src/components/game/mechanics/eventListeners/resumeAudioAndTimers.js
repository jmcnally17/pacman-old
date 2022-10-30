import resumeTimers from "../timers/resumeTimers";

export default function resumeAudioAndTimers(
  pacmanDeathAudio,
  levelUpAudio,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  callback = resumeTimers
) {
  if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.play();
  if (levelUpAudio._state === "loaded") levelUpAudio.play();
  callback(cycleTimer, scaredTimer, retreatingTimers);
}
