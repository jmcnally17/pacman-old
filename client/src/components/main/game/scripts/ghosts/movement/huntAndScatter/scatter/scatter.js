import findOrangeScatterPath from "./findOrangeScatterPath";

export default function scatter(
  ghost,
  pathway,
  callback = findOrangeScatterPath
) {
  if (ghost.colour === "orange") callback(pathway);
}
