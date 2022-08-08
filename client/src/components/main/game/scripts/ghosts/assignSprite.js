import assignRecoveringSprite from "./assignRecoveringSprite";
import assignRegularSprite from "./assignRegularSprite";
import assignScaredSprite from "./assignScaredSprite";

export default function assignSprite(
  ghost,
  callbackOne = assignScaredSprite,
  callbackTwo = assignRecoveringSprite,
  callbackThree = assignRegularSprite
) {
  if (ghost.isScared) callbackOne(ghost);
  else if (ghost.isRecovering) callbackTwo(ghost);
  else callbackThree(ghost);
}
