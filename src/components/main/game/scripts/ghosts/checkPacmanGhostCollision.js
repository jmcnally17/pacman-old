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
      ghost.position.x = 380;
      ghost.position.y = 60;
      ghost.velocity.x = 0;
      ghost.velocity.y = ghost.speed;
    }
  }
};

module.exports = checkPacmanGhostCollision;
