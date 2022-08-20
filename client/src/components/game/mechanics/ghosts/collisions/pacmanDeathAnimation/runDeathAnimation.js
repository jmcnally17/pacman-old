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
  callbackOne = drawBoard,
  callbackTwo = checkPacmanLives
) {
  cancelAnimationFrame(variables.animationId);
  variables.animationId = requestAnimationFrame(() =>
    runDeathAnimation(
      variables,
      ctx,
      boundaries,
      pellets,
      powerUps,
      pacman,
      ghosts,
      cycleTimer,
      scaredTimer,
      ghostAudioObjects
    )
  );
  callbackOne(ctx, boundaries, pellets, powerUps);
  if (pacman.radians < Math.PI) {
    pacman.shrink(ctx);
  } else {
    cancelAnimationFrame(variables.animationId);
    callbackTwo(
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
