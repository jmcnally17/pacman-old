export default function resetAfterDeath(pacman, lastKeyPressed, ghosts) {
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
}
