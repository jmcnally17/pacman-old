import findCyanScatterPath from "./findCyanScatterPath";
import findOrangeScatterPath from "./findOrangeScatterPath";
import findPinkScatterPath from "./findPinkScatterPath";
import findRedScatterPath from "./findRedScatterPath";

export default function scatter(
  ghost,
  pathway,
  callbackOne = findRedScatterPath,
  callbackTwo = findPinkScatterPath,
  callbackThree = findCyanScatterPath,
  callbackFour = findOrangeScatterPath
) {
  if (ghost.colour === "red") callbackOne(pathway);
  else if (ghost.colour === "pink") callbackTwo(pathway);
  else if (ghost.colour === "cyan") callbackThree(pathway);
  else if (ghost.colour === "orange") callbackFour(pathway);
}
