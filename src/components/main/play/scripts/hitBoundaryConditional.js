/* eslint-disable no-undef */
const hitBoundaryConditional = (pacman, boundary, { velocity }) => {
  if (
    pacman.position.y - pacman.radius + velocity.y <=
      boundary.position.y + boundary.height &&
    pacman.position.y + pacman.radius + velocity.y >= boundary.position.y &&
    pacman.position.x + pacman.radius + velocity.x >= boundary.position.x &&
    pacman.position.x - pacman.radius + velocity.x <=
      boundary.position.x + boundary.width
  ) {
    return true;
  }
};

module.exports = hitBoundaryConditional;
