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
  callbackOne = runLevelUpAnimation,
  callbackTwo = resetAfterLevelUp
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
      levelUpAudio
    )
  );
  ctx.font = "40px Arial";
  ctx.fillStyle = "yellow";
  ctx.textAlign = "center";
  ctx.fillText("Level Up!", 448, 576);
  variables.levelUpCount++;
  if (variables.levelUpCount >= 350) {
    cancelAnimationFrame(variables.animationId);
    levelUpAudio.unload();
    variables.level++;
    callbackTwo(
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
