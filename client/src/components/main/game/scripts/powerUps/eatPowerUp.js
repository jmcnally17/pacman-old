import scareGhost from "./scareGhost";

export default function eatPowerUp(
  powerUp,
  pacman,
  score,
  killCount,
  ghosts,
  callback = scareGhost
) {
  if (
    powerUp.position.x === pacman.position.x &&
    powerUp.position.y === pacman.position.y &&
    !powerUp.hasBeenEaten
  ) {
    powerUp.changeEatenState();
    score.points += 50;
    killCount.number = 0;
    ghosts.forEach((ghost) => {
      if (!ghost.isRecovering) callback(ghost);
    });
  }
}
