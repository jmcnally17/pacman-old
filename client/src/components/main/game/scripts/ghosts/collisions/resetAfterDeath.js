const resetAfterDeath = (pacman, lastKeyPressed, ghosts) => {
  pacman.reset();
  lastKeyPressed.key = "";
  ghosts.forEach((ghost) => {
    ghost.reset();
  });
};

module.exports = resetAfterDeath;
