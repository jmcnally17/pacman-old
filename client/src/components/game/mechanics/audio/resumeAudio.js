export default function resumeAudio(pacmanDeathAudio, levelUpAudio) {
  if (pacmanDeathAudio._state === "loaded") pacmanDeathAudio.play();
  if (levelUpAudio._state === "loaded") levelUpAudio.play();
}
