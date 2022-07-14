/* eslint-disable no-undef */
const checkGameOver = (ghost, pacman, score, animationId) => {
  if (
    ghost.position.y - ghost.radius <= pacman.position.y &&
    ghost.position.y + ghost.radius >= pacman.position.y &&
    ghost.position.x + ghost.radius >= pacman.position.x &&
    ghost.position.x - ghost.radius <= pacman.position.x
  ) {
    cancelAnimationFrame(animationId);
    console.log(`Game Over!\nYou scored ${score.points} points.`);
  }
};

module.exports = checkGameOver;
