import runDeathAnimation from "./pacmanDeath/runDeathAnimation";

export default function dealWithCollision(
  ghost,
  pacman,
  variables,
  ghosts,
  pellets,
  powerUps,
  cycleTimer,
  scaredTimer,
  ghostAudioObjects,
  ctx,
  boundaries,
  pacmanDeathAudio,
  callback = runDeathAnimation
) {
  if (!ghost.isScared && !ghost.isRetreating) {
    pacman.radians = Math.PI / 4;
    cancelAnimationFrame(variables.animationId);
    ghostAudioObjects.forEach((audio) => audio.unload());
    pacmanDeathAudio.load();
    pacmanDeathAudio.play();
    callback(
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
      pacmanDeathAudio
    );
  } else if (ghost.isScared) {
    variables.score += 200 * Math.pow(2, variables.killCount);
    variables.killCount++;
    ghost.changeRetreatingState();
    ghost.retreatingTimer.start();
    ghost.changeScaredState();
  }
}
