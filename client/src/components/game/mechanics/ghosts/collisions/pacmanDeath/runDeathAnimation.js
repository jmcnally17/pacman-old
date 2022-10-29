import checkPacmanLives from "./checkPacmanLives";
import drawBoard from "./drawBoard";

export default function runDeathAnimation(
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
  callbackOne = runDeathAnimation,
  callbackTwo = drawBoard,
  callbackThree = checkPacmanLives
) {
  variables.animationId = requestAnimationFrame(() =>
    callbackOne(
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
    )
  );
  callbackTwo(ctx, boundaries, pellets, powerUps);
  if (pacman.radians < Math.PI) {
    pacman.shrink(ctx);
  } else {
    pacman.isShrinking = false;
    cancelAnimationFrame(variables.animationId);
    pacmanDeathAudio.unload();
    callbackThree(
      pacman,
      variables,
      pellets,
      powerUps,
      ghosts,
      cycleTimer,
      scaredTimer,
      ghostAudioObjects
    );
  }
}
