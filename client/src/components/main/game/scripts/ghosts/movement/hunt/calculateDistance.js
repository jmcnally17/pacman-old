import addCoordinates from "./addCoordinates";
import calculateHypotenuse from "./calculateHypotenuse";
import findCyanAimPath from "./findCyanAimPath";
import findPinkAimPath from "./findPinkAimPath";
import findRedOrangeAimPath from "./findRedOrangeAimPath";
import isOrangeFarFromPacman from "./isOrangeFarFromPacman";

export default function calculateDistance(
  pacman,
  ghost,
  pathways,
  length,
  redGhost,
  callbackOne = addCoordinates,
  callbackTwo = findRedOrangeAimPath,
  callbackThree = isOrangeFarFromPacman,
  callbackFour = findPinkAimPath,
  callbackFive = findCyanAimPath,
  callbackSix = calculateHypotenuse
) {
  pathways.forEach((pathway) => {
    callbackOne(pathway, ghost, length);
    let displacementFromAim;
    if (
      ghost.colour === "red" ||
      (ghost.colour === "orange" && callbackThree(ghost, pacman, length))
    )
      displacementFromAim = callbackTwo(pacman, pathway);
    else if (ghost.colour === "pink")
      displacementFromAim = callbackFour(pacman, pathway, length);
    else if (ghost.colour === "cyan")
      displacementFromAim = callbackFive(pacman, length, redGhost, pathway);
    callbackSix(displacementFromAim, pathway);
  });
}
