import findOrangeScatterPath from "./findOrangeScatterPath";
import findRedScatterPath from "./findRedScatterPath";

export default function scatter(
  ghost,
  pathway,
  callbackOne = findRedScatterPath,
  callbackTwo = findOrangeScatterPath
) {
  if (ghost.colour === "red") callbackOne(pathway);
  else if (ghost.colour === "orange") callbackTwo(pathway);
}
