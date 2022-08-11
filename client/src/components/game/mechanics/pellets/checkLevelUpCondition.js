import resetAfterLevelUp from "./resetAfterLevelUp";

export default function checkLevelUpCondition(
  pellets,
  pacman,
  lastKeyPressed,
  ghosts,
  powerUps,
  level,
  cycleTimer,
  callback = resetAfterLevelUp
) {
  let eatenPellets = 0;
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) {
      eatenPellets++;
    }
    if (eatenPellets === pellets.length) {
      callback(pacman, lastKeyPressed, ghosts, pellets, powerUps, cycleTimer);
      level.number++;
    }
  });
}
