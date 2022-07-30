import addCoordinates from "./addCoordinates";
import calculateHypotenuse from "./calculateHypotenuse";
import findPinkAimPath from "./findPinkAimPath";
import findRedOrangeAimPath from "./findRedOrangeAimPath";

export default function calculateDistance(
  pacman,
  ghost,
  pathways,
  length,
  callbackOne = addCoordinates,
  callbackTwo = findRedOrangeAimPath,
  callbackThree = findPinkAimPath,
  callbackFour = calculateHypotenuse
) {
  pathways.forEach((pathway) => {
    callbackOne(pathway, ghost, length);
    let displacementFromAim;
    if (ghost.colour === "red")
      displacementFromAim = callbackTwo(pacman, pathway);
    if (ghost.colour === "pink")
      displacementFromAim = callbackThree(pacman, pathway, length);
    callbackFour(displacementFromAim, pathway);
  });
}
