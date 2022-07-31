export default function findCyanAimPath(pacman, length, redGhost, pathway) {
  let x = pacman.position.x * 2 - redGhost.position.x;
  let y = pacman.position.y * 2 - redGhost.position.y;
  if (pacman.rotation === 0) x += length * 4;
  else if (pacman.rotation === Math.PI / 2) y += length * 4;
  else if (pacman.rotation === Math.PI) x -= length * 4;
  else if (pacman.rotation === (Math.PI * 3) / 2) y -= length * 4;
  return {
    x: x - pathway.position.x,
    y: y - pathway.position.y,
  };
}
