import findPosition from "./findPosition";

export default function calculateDistance(
  pacman,
  ghost,
  pathways,
  length,
  callback = findPosition
) {
  pathways.forEach((pathway) => {
    callback(pathway, ghost, length);
    let x;
    let y;
    if (ghost.colour === "red") {
      x = pacman.position.x - pathway.position.x;
      y = pacman.position.y - pathway.position.y;
    } else if (ghost.colour === "pink") {
      if (pacman.rotation === 0) {
        x = pacman.position.x + length * 2 - pathway.position.x;
        y = pacman.position.y - pathway.position.y;
      } else if (pacman.rotation === Math.PI / 2) {
        x = pacman.position.x - pathway.position.x;
        y = pacman.position.y + length * 2 - pathway.position.y;
      } else if (pacman.rotation === Math.PI) {
        x = pacman.position.x - length * 2 - pathway.position.x;
        y = pacman.position.y - pathway.position.y;
      } else if (pacman.rotation === (Math.PI * 3) / 2) {
        x = pacman.position.x - pathway.position.x;
        y = pacman.position.y - length * 2 - pathway.position.y;
      }
    }
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    pathway.distance = distance;
  });
}
