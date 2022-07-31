import huntPacman from "./hunt/huntPacman";
import moveRandomly from "./random/moveRandomly";

export default function chooseMovement(
  ghost,
  pacman,
  collisions,
  length,
  redGhost,
  callbackOne = huntPacman,
  callbackTwo = moveRandomly
) {
  if (!ghost.isScared) {
    callbackOne(ghost, pacman, collisions, length, redGhost);
  } else {
    callbackTwo(ghost, collisions);
  }
}
