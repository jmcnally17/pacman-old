import resetAfterLevelUp from "./resetAfterLevelUp";

export default function checkLevelUpCondition(
  pellets,
  pacman,
  lastKeyPressed,
  ghosts,
  powerUps,
  level,
  count,
  huntingTimeout,
  callback = resetAfterLevelUp
) {
  let eatenPellets = 0;
  pellets.forEach((pellet) => {
    if (pellet.hasBeenEaten) {
      eatenPellets++;
    }
    if (eatenPellets === pellets.length) {
      callback(
        pacman,
        lastKeyPressed,
        ghosts,
        pellets,
        powerUps,
        count,
        huntingTimeout
      );
      level.number++;
    }
  });
}
