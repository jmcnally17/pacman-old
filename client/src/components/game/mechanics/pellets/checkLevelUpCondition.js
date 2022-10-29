import runLevelUpAnimation from "./levelUpAnimation/runLevelUpAnimation";

export default function checkLevelUpCondition(
  pellets,
  pacman,
  variables,
  ghosts,
  powerUps,
  cycleTimer,
  scaredTimer,
  ctx,
  ghostAudioObjects,
  levelUpAudio,
  boundaries,
  callback = runLevelUpAnimation
) {
  let eatenPellets = 0;
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) {
      eatenPellets++;
    }
    if (eatenPellets === pellets.length) {
      cancelAnimationFrame(variables.animationId);
      ghostAudioObjects.forEach((audio) => audio.unload());
      levelUpAudio.load();
      levelUpAudio.play();
      pacman.isLevellingUp = true;
      callback(
        variables,
        pacman,
        ghosts,
        pellets,
        powerUps,
        cycleTimer,
        scaredTimer,
        ctx,
        ghostAudioObjects,
        levelUpAudio,
        boundaries
      );
    }
  });
}
