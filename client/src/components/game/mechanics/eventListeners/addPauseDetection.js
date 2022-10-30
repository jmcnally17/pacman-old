import pauseAudioAndTimers from "./pauseAudioAndTimers";
import loadPauseOverlay from "./loadPauseOverlay";
import resumeAudioAndTimers from "./resumeAudioAndTimers";
import resumeAnimation from "./resumeAnimation";

export default function addPauseDetection(
  variables,
  cycleTimer,
  scaredTimer,
  retreatingTimers,
  ghostAudioObjects,
  pacmanDeathAudio,
  levelUpAudio,
  pacman,
  ctx,
  boundaries,
  pellets,
  powerUps,
  ghosts,
  callbackOne = pauseAudioAndTimers,
  callbackTwo = loadPauseOverlay,
  callbackThree = resumeAudioAndTimers,
  callbackFour = resumeAnimation
) {
  window.addEventListener(
    "keydown",
    (variables.pauseEventListener = ({ key }) => {
      if (key === "Escape") {
        if (!variables.isGamePaused) {
          variables.isGamePaused = true;
          cancelAnimationFrame(variables.animationId);
          callbackOne(
            ghostAudioObjects,
            pacmanDeathAudio,
            levelUpAudio,
            cycleTimer,
            scaredTimer,
            retreatingTimers
          );
          callbackTwo(ctx);
        } else {
          variables.isGamePaused = false;
          callbackThree(
            pacmanDeathAudio,
            levelUpAudio,
            cycleTimer,
            scaredTimer,
            retreatingTimers
          );
          callbackFour(
            variables,
            ctx,
            boundaries,
            pellets,
            powerUps,
            pacman,
            ghosts,
            cycleTimer,
            scaredTimer,
            ghostAudioObjects,
            pacmanDeathAudio,
            levelUpAudio
          );
        }
      }
    })
  );
}
