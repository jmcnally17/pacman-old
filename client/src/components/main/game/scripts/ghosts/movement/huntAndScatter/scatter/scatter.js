import findOrangeScatterPath from "./findOrangeScatterPath";
import findPinkScatterPath from "./findPinkScatterPath";
import findRedScatterPath from "./findRedScatterPath";

export default function scatter(
  ghost,
  pathway,
  callbackOne = findRedScatterPath,
  callbackTwo = findPinkScatterPath,
  callbackThree = findOrangeScatterPath
) {
  if (ghost.colour === "red") callbackOne(pathway);
  if (ghost.colour === "pink") callbackTwo(pathway);
  else if (ghost.colour === "orange") callbackThree(pathway);
}
