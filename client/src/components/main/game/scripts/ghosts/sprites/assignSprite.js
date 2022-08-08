import assignRetreatingSprite from "./assignRetreatingSprite";
import assignRegularSprite from "./assignRegularSprite";
import assignScaredSprite from "./assignScaredSprite";

export default function assignSprite(
  ghost,
  callbackOne = assignScaredSprite,
  callbackTwo = assignRetreatingSprite,
  callbackThree = assignRegularSprite
) {
  if (ghost.isScared) callbackOne(ghost);
  else if (ghost.isRetreating) callbackTwo(ghost);
  else callbackThree(ghost);
}
