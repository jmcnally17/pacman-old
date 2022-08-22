import resetAfterLevelUp from "./resetAfterLevelUp";

export default function checkLevelUpCondition(
  pellets,
  pacman,
  variables,
  ghosts,
  powerUps,
  cycleTimer,
  scaredTimer,
  callback = resetAfterLevelUp
) {
  let eatenPellets = 0;
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) {
      eatenPellets++;
    }
    if (eatenPellets === pellets.length) {
      cancelAnimationFrame(variables.animationId);
      callback(
        pacman,
        variables,
        ghosts,
        pellets,
        powerUps,
        cycleTimer,
        scaredTimer
      );
      variables.level++;
    }
  });
}
