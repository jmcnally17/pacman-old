import drawLevelUpBoard from "./drawLevelUpBoard";
import resetAfterLevelUp from "./resetAfterLevelUp";

export default function runLevelUpAnimation(
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
  boundaries,
  callbackOne = runLevelUpAnimation,
  callbackTwo = drawLevelUpBoard,
  callbackThree = resetAfterLevelUp
) {
  variables.animationId = requestAnimationFrame(() =>
    callbackOne(
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
    )
  );
  callbackTwo(ctx, boundaries);
  if (variables.levelUpCount % 10 === 0 && variables.levelUpCount !== 0)
    boundaries.forEach((boundary) => boundary.flash());
  variables.levelUpCount++;
  if (variables.levelUpCount >= 350) {
    cancelAnimationFrame(variables.animationId);
    levelUpAudio.unload();
    variables.level++;
    callbackThree(
      pacman,
      variables,
      ghosts,
      pellets,
      powerUps,
      cycleTimer,
      scaredTimer,
      ghostAudioObjects
    );
  }
}
