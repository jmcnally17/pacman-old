import pickGhostDirection from "./movement/pickGhostDirection";
import checkPacmanGhostCollision from "./collisions/checkPacmanGhostCollision";
import updateCollisions from "./movement/updateCollisions";
import implementTunnel from "../implementTunnel";
import assingSprite from "./assignSprite";

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
  level
) {
  ghosts.forEach((ghost) => {
    assingSprite(ghost);
    const collisions = [];
    ghost.update(ctx);
    implementTunnel(ghost);
    updateCollisions(boundaries, collisions, ghost);
    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      pickGhostDirection(ghost, collisions);
    }
    checkPacmanGhostCollision(
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
      level
    );
  });
}
