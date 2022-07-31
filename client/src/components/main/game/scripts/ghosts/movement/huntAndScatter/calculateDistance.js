import addCoordinates from "./addCoordinates";
import calculateHypotenuse from "./calculateHypotenuse";
import findCyanAimPath from "./hunt/findCyanAimPath";
import findOrangeScatterPath from "./scatter/findOrangeScatterPath";
import findPinkAimPath from "./hunt/findPinkAimPath";
import findRedOrangeAimPath from "./hunt/findRedOrangeAimPath";
import isOrangeFarFromPacman from "./isOrangeFarFromPacman";

export default function calculateDistance(
  pacman,
  ghost,
  pathways,
  length,
  redGhost,
  callbackOne = addCoordinates,
  callbackTwo = isOrangeFarFromPacman,
  callbackThree = findRedOrangeAimPath,
  callbackFour = findPinkAimPath,
  callbackFive = findCyanAimPath,
  callbackSix = findOrangeScatterPath,
  callbackSeven = calculateHypotenuse
) {
  pathways.forEach((pathway) => {
    callbackOne(pathway, ghost, length);
    let displacementFromAim;
    if (
      ghost.colour === "red" ||
      (ghost.colour === "orange" && callbackTwo(ghost, pacman, length))
    )
      displacementFromAim = callbackThree(pacman, pathway);
    else if (ghost.colour === "pink")
      displacementFromAim = callbackFour(pacman, pathway, length);
    else if (ghost.colour === "cyan")
      displacementFromAim = callbackFive(pacman, length, redGhost, pathway);
    else if (ghost.colour === "orange")
      displacementFromAim = callbackSix(ghost);
    callbackSeven(displacementFromAim, pathway);
  });
}
