import adjustPosition from "./adjustPosition";

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
  } else if (!ghost.isScared && ghost.speed === length / 16) {
    callback(ghost);
    ghost.velocity.x *= 2;
    ghost.velocity.y *= 2;
    ghost.speed *= 2;
  }
}
