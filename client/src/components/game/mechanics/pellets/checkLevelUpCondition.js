import runLevelUpAnimation from "./runLevelUpAnimation";

export default function checkLevelUpCondition(
  pellets,
  pacman,
  variables,
  ghosts,
  powerUps,
  cycleTimer,
  scaredTimer,
  ctx,
  callback = runLevelUpAnimation
) {
  let eatenPellets = 0;
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) {
      eatenPellets++;
    }
    if (eatenPellets === pellets.length) {
      cancelAnimationFrame(variables.animationId);
      callback(
        variables,
        pacman,
        ghosts,
        pellets,
        powerUps,
        cycleTimer,
        scaredTimer,
        ctx
      );
    }
  });
}
