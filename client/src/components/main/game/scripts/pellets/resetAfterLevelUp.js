export default function resetAfterLevelUp(
  pacman,
  lastKeyPressed,
  ghosts,
  pellets,
  powerUps
) {
  pacman.reset();
  lastKeyPressed.key = "";
  ghosts.forEach((ghost) => {
    ghost.reset();
    ghost.resetHuntingState();
    ghost.huntingInterval = setInterval(
      () => ghost.changeHuntingState(),
      10000
    );
  });
  pellets.forEach((pellet) => {
    pellet.changeEatenState();
  });
  powerUps.forEach((powerUp) => {
    if (powerUp.hasBeenEaten) powerUp.changeEatenState();
  });
}
