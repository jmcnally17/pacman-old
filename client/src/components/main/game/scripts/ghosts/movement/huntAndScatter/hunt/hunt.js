import isOrangeFarFromPacman from "../isOrangeFarFromPacman";
import findOrangeScatterPath from "../scatter/findOrangeScatterPath";
import findCyanAimPath from "./findCyanAimPath";
import findPinkAimPath from "./findPinkAimPath";
import findRedOrangeAimPath from "./findRedOrangeAimPath";

export default function hunt(
  ghost,
  pathway,
  pacman,
  length,
  redGhost,
  callbackOne = isOrangeFarFromPacman,
  callbackTwo = findRedOrangeAimPath,
  callbackThree = findPinkAimPath,
  callbackFour = findCyanAimPath,
  callbackFive = findOrangeScatterPath
) {
  if (
    ghost.colour === "red" ||
    (ghost.colour === "orange" && callbackOne(ghost, pacman, length))
  )
    return callbackTwo(pacman, pathway);
  else if (ghost.colour === "pink")
    return callbackThree(pacman, pathway, length);
  else if (ghost.colour === "cyan")
    return callbackFour(pacman, length, redGhost, pathway);
  else if (ghost.colour === "orange") return callbackFive(pathway);
}
