import addCoordinates from "./addCoordinates";
import calculateHypotenuse from "./calculateHypotenuse";
import findCyanAimPath from "./findCyanAimPath";
import findPinkAimPath from "./findPinkAimPath";
import findRedOrangeAimPath from "./findRedOrangeAimPath";

export default function calculateDistance(
  pacman,
  ghost,
  pathways,
  length,
  redGhost,
  callbackOne = addCoordinates,
  callbackTwo = findRedOrangeAimPath,
  callbackThree = findPinkAimPath,
  callbackFour = findCyanAimPath,
  callbackFive = calculateHypotenuse
) {
  pathways.forEach((pathway) => {
    callbackOne(pathway, ghost, length);
    let displacementFromAim;
    if (ghost.colour === "red")
      displacementFromAim = callbackTwo(pacman, pathway);
    else if (ghost.colour === "pink")
      displacementFromAim = callbackThree(pacman, pathway, length);
    else if (ghost.colour === "cyan")
      displacementFromAim = callbackFour(pacman, length, redGhost, pathway);
    callbackFive(displacementFromAim, pathway);
  });
}
