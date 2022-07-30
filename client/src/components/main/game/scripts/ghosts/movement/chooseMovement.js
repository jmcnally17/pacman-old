import huntPacman from "./hunt/huntPacman";
import moveRandomly from "./random/moveRandomly";

export default function chooseMovement(
  ghost,
  pacman,
  collisions,
  length,
  callbackOne = huntPacman,
  callbackTwo = moveRandomly
) {
  if (
    (ghost.colour === "red" && !ghost.isScared) ||
    (ghost.colour === "pink" && !ghost.isScared)
  ) {
    callbackOne(ghost, pacman, collisions, length);
  } else {
    callbackTwo(ghost, collisions);
  }
}
