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
  callbackOne = runDeathAnimation,
  callbackTwo = drawBoard,
  callbackThree = checkPacmanLives
) {
  cancelAnimationFrame(variables.animationId);
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
      ghostAudioObjects
    )
  );
  callbackTwo(ctx, boundaries, pellets, powerUps);
  if (pacman.radians < Math.PI) {
    pacman.shrink(ctx);
  } else {
    cancelAnimationFrame(variables.animationId);
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
