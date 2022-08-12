export default function findPinkAimPath(pacman, pathway, variables) {
  let x = pacman.position.x - pathway.position.x;
  let y = pacman.position.y - pathway.position.y;
  if (pacman.rotation === 0) x += variables.length * 4;
  else if (pacman.rotation === Math.PI / 2) y += variables.length * 4;
  else if (pacman.rotation === Math.PI) x -= variables.length * 4;
  else if (pacman.rotation === (Math.PI * 3) / 2) y -= variables.length * 4;
  return {
    x: x,
    y: y,
  };
}
