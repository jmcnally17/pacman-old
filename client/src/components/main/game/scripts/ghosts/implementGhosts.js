import checkPacmanGhostCollision from "./collisions/checkPacmanGhostCollision";
import updateCollisions from "./movement/updateCollisions";
import implementTunnel from "../implementTunnel";
import assignSprite from "./assignSprite";
import checkSpeedMatchesState from "./movement/checkSpeedMatchesState";
import chooseMovement from "./movement/chooseMovement";

export default function implementGhosts(
  ghosts,
  boundaries,
  ctx,
  length,
  pacman,
  score,
  animationId,
  lastKeyPressed,
  name,
  mainEl,
  pellets,
  powerUps,
  level,
  killCount,
  callbackOne = checkSpeedMatchesState,
  callbackTwo = assignSprite,
  callbackThree = implementTunnel,
  callbackFour = updateCollisions,
  callbackFive = chooseMovement,
  callbackSix = checkPacmanGhostCollision
) {
  ghosts.forEach((ghost) => {
    callbackOne(ghost, length);
    callbackTwo(ghost);
    const collisions = [];
    ghost.update(ctx);
    callbackThree(ghost, length);
    callbackFour(boundaries, collisions, ghost);
    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      callbackFive(ghost, pacman, collisions, length);
    }
    callbackSix(
      ghost,
      pacman,
      score,
      animationId,
      lastKeyPressed,
      ghosts,
      name,
      mainEl,
      pellets,
      powerUps,
      level,
      killCount
    );
  });
}
