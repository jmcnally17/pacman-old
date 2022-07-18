export default function collisionConditional(ghost, pacman) {
  if (
    ghost.position.y - ghost.radius <= pacman.position.y &&
    ghost.position.y + ghost.radius >= pacman.position.y &&
    ghost.position.x + ghost.radius >= pacman.position.x &&
    ghost.position.x - ghost.radius <= pacman.position.x
  ) {
    return true;
  }
  return false;
}
