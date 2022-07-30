import addCoordinates from "./addCoordinates";

export default function calculateDistance(
  pacman,
  ghost,
  pathways,
  length,
  callback = addCoordinates
) {
  pathways.forEach((pathway) => {
    callback(pathway, ghost, length);
    let x = pacman.position.x - pathway.position.x;
    let y = pacman.position.y - pathway.position.y;
    if (ghost.colour === "pink") {
      if (pacman.rotation === 0) {
        x += length * 4;
      } else if (pacman.rotation === Math.PI / 2) {
        y += length * 4;
      } else if (pacman.rotation === Math.PI) {
        x -= length * 4;
      } else if (pacman.rotation === (Math.PI * 3) / 2) {
        y -= length * 4;
      }
    }
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    pathway.distance = distance;
  });
}
