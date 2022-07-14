/* eslint-disable no-undef */
const checkPacmanGhostCollision = (ghost, pacman, score, animationId) => {
  if (
    ghost.position.y - ghost.radius <= pacman.position.y &&
    ghost.position.y + ghost.radius >= pacman.position.y &&
    ghost.position.x + ghost.radius >= pacman.position.x &&
    ghost.position.x - ghost.radius <= pacman.position.x
  ) {
    if (!ghost.isScared) {
      cancelAnimationFrame(animationId);
      console.log(`Game Over!\nYou scored ${score.points} points.`);
    } else {
      score.points += 200;
      ghost.reset();
    }
  }
};

module.exports = checkPacmanGhostCollision;
