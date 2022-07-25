import pickGhostDirection from "./movement/pickGhostDirection";
import checkPacmanGhostCollision from "./collisions/checkPacmanGhostCollision";
import updateCollisions from "./movement/updateCollisions";
import implementTunnel from "../implementTunnel";
import assignSprite from "./assignSprite";

export default function implementGhosts(
  ghosts,
  boundaries,
  ctx,
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
  callbackOne = assignSprite,
  callbackTwo = implementTunnel,
  callbackThree = updateCollisions,
  callbackFour = pickGhostDirection,
  callbackFive = checkPacmanGhostCollision
) {
  ghosts.forEach((ghost) => {
    callbackOne(ghost);
    const collisions = [];
    ghost.update(ctx);
    callbackTwo(ghost);
    callbackThree(boundaries, collisions, ghost);
    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      callbackFour(ghost, collisions);
    }
    callbackFive(
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
