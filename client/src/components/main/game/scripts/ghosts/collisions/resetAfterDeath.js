export default function resetAfterDeath(pacman, lastKeyPressed, ghosts) {
  pacman.reset();
  lastKeyPressed.key = "";
  ghosts.forEach((ghost) => {
    ghost.reset();
  });
}
