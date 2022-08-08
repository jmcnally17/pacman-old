import addCoordinates from "./addCoordinates";
import calculateHypotenuse from "./calculateHypotenuse";
import hunt from "./hunt/hunt";
import scatter from "./scatter/scatter";

export default function calculateDistance(
  pacman,
  ghost,
  pathways,
  length,
  redGhost,
  callbackOne = addCoordinates,
  callbackTwo = hunt,
  callbackThree = scatter,
  callbackFour = calculateHypotenuse
) {
  pathways.forEach((pathway) => {
    callbackOne(pathway, ghost, length);
    let displacementFromAim;
    if (ghost.isHunting) {
      displacementFromAim = callbackTwo(
        ghost,
        pathway,
        pacman,
        length,
        redGhost
      );
    } else if (!ghost.isHunting) {
      displacementFromAim = callbackThree(ghost, pathway);
    }
    callbackFour(displacementFromAim, pathway);
  });
}
