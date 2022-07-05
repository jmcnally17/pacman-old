/* eslint-disable no-undef */
const hitBoundary = (pacman, boundary) => {
  if (
    pacman.position.y - pacman.radius + pacman.velocity.y <=
      boundary.position.y + boundary.height &&
    pacman.position.y + pacman.radius + pacman.velocity.y >=
      boundary.position.y &&
    pacman.position.x + pacman.radius + pacman.velocity.x >=
      boundary.position.x &&
    pacman.position.x - pacman.radius + pacman.velocity.x <=
      boundary.position.x + boundary.width
  ) {
    return true;
  }
};

module.exports = hitBoundary;
