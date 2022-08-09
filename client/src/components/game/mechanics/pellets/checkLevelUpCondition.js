import resetAfterLevelUp from "./resetAfterLevelUp";

export default function checkLevelUpCondition(
  pellets,
  pacman,
  lastKeyPressed,
  ghosts,
  powerUps,
  level,
  callback = resetAfterLevelUp
) {
  let count = 0;
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) {
      count++;
    }
    if (count === pellets.length) {
      callback(pacman, lastKeyPressed, ghosts, pellets, powerUps);
      level.number++;
    }
  });
}
