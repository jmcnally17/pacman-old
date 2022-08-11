import checkPacmanGhostCollision from "./collisions/checkPacmanGhostCollision";
import updateCollisions from "./movement/updateCollisions";
import implementTunnel from "../implementTunnel";
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
  redGhost,
  cycleTimer,
  callbackOne = checkSpeedMatchesState,
  callbackTwo = implementTunnel,
  callbackThree = updateCollisions,
  callbackFour = chooseMovement,
  callbackFive = checkPacmanGhostCollision
) {
  ghosts.forEach((ghost) => {
    callbackOne(ghost, length);
    const collisions = [];
    ghost.update(ctx);
    callbackTwo(ghost, length);
    callbackThree(boundaries, collisions, ghost);
    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      callbackFour(ghost, pacman, collisions, length, redGhost);
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
      killCount,
      cycleTimer
    );
  });
}
