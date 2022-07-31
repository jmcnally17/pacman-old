import addCoordinates from "./addCoordinates";
import calculateHypotenuse from "./calculateHypotenuse";
import hunt from "./hunt/hunt";

export default function calculateDistance(
  pacman,
  ghost,
  pathways,
  length,
  redGhost,
  callbackOne = addCoordinates,
  callbackTwo = hunt,
  callbackThree = calculateHypotenuse
) {
  pathways.forEach((pathway) => {
    callbackOne(pathway, ghost, length);
    const displacementFromAim = callbackTwo(
      ghost,
      pathway,
      pacman,
      length,
      redGhost
    );
    callbackThree(displacementFromAim, pathway);
  });
}
