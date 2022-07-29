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
    const x = pacman.position.x - pathway.position.x;
    const y = pacman.position.y - pathway.position.y;
    const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    pathway.distance = distance;
  });
}
