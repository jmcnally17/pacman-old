import shiftBeforeRecovering from "./shiftBeforeRecovering";
import shiftRegular from "./shiftRegular";

export default function adjustPosition(
  ghost,
  callbackOne = shiftBeforeRecovering,
  callbackTwo = shiftRegular
) {
  if (ghost.isRecovering) callbackOne(ghost);
  else callbackTwo(ghost);
}
