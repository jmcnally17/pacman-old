export default function adjustPosition(ghost) {
  if (ghost.isRecovering) {
    if (ghost.velocity.x > 0) {
      if (ghost.position.x % 8 === 2) ghost.position.x -= 2;
      if (ghost.position.x % 8 === 4) ghost.position.x -= 4;
      if (ghost.position.x % 8 === 6) ghost.position.x -= 6;
    } else if (ghost.velocity.x < 0) {
      if (ghost.position.x % 8 === 2) ghost.position.x += 6;
      if (ghost.position.x % 8 === 4) ghost.position.x += 4;
      if (ghost.position.x % 8 === 6) ghost.position.x += 2;
    }
    if (ghost.velocity.y > 0) {
      if (ghost.position.y % 8 === 2) ghost.position.y -= 2;
      if (ghost.position.y % 8 === 4) ghost.position.y -= 4;
      if (ghost.position.y % 8 === 6) ghost.position.y -= 6;
    } else if (ghost.velocity.y < 0) {
      if (ghost.position.y % 8 === 2) ghost.position.y += 6;
      if (ghost.position.y % 8 === 4) ghost.position.y += 4;
      if (ghost.position.y % 8 === 6) ghost.position.y += 2;
    }
  } else {
    if (ghost.position.x % 4 !== 0) ghost.position.x += 2;
    if (ghost.position.y % 4 !== 0) ghost.position.y += 2;
  }
}
