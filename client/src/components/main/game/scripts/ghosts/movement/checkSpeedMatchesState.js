import adjustPosition from "./adjustPosition/adjustPosition";

export default function checkSpeedMatchesState(
  ghost,
  length,
  callback = adjustPosition
) {
  if (ghost.isScared && ghost.speed === length / 8) {
    callback(ghost);
    ghost.velocity.x /= 2;
    ghost.velocity.y /= 2;
    ghost.speed /= 2;
  } else if (ghost.isRecovering && ghost.speed === length / 16) {
    callback(ghost);
    ghost.velocity.x *= 4;
    ghost.velocity.y *= 4;
    ghost.speed *= 4;
  } else if (!ghost.isScared && ghost.speed === length / 16) {
    callback(ghost);
    ghost.velocity.x *= 2;
    ghost.velocity.y *= 2;
    ghost.speed *= 2;
  } else if (!ghost.isRecovering && ghost.speed === length / 4) {
    callback(ghost);
    ghost.velocity.x /= 2;
    ghost.velocity.y /= 2;
    ghost.speed /= 2;
  }
}
