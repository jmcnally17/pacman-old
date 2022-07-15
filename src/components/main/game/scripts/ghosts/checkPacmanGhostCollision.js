/* eslint-disable no-undef */
const checkPacmanGhostCollision = (
  ghost,
  pacman,
  score,
  ghosts,
  animationId,
  lastKeyPressed
) => {
  if (
    ghost.position.y - ghost.radius <= pacman.position.y &&
    ghost.position.y + ghost.radius >= pacman.position.y &&
    ghost.position.x + ghost.radius >= pacman.position.x &&
    ghost.position.x - ghost.radius <= pacman.position.x
  ) {
    if (!ghost.isScared) {
      if (pacman.lives <= 0) {
        cancelAnimationFrame(animationId);
        console.log(`Game Over!\nYou scored ${score.points} points.`);
      } else {
        pacman.loseLife();
        pacman.reset();
        lastKeyPressed.key = "";
        ghosts.forEach((ghost) => {
          ghost.reset();
        });
        console.log(pacman.lives);
      }
    } else {
      score.points += 200;
      ghost.reset();
    }
  }
};

module.exports = checkPacmanGhostCollision;
