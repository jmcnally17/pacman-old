/* eslint-disable no-undef */
const checkPacmanGhostCollision = (ghost, pacman, score) => {
  if (
    ghost.position.y - ghost.radius <= pacman.position.y &&
    ghost.position.y + ghost.radius >= pacman.position.y &&
    ghost.position.x + ghost.radius >= pacman.position.x &&
    ghost.position.x - ghost.radius <= pacman.position.x
  ) {
    if (!ghost.isScared) {
      pacman.loseLife();
      console.log(pacman.lives);
    } else {
      score.points += 200;
      ghost.reset();
    }
  }
};

module.exports = checkPacmanGhostCollision;
