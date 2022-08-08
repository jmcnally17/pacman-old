import huntAndScatter from "./huntAndScatter/huntAndScatter";
import moveRandomly from "./random/moveRandomly";

export default function chooseMovement(
  ghost,
  pacman,
  collisions,
  length,
  redGhost,
  callbackOne = huntAndScatter,
  callbackTwo = moveRandomly
) {
  if (!ghost.isScared && !ghost.isRecovering) {
    callbackOne(ghost, pacman, collisions, length, redGhost);
  } else {
    callbackTwo(ghost, collisions);
  }
}
