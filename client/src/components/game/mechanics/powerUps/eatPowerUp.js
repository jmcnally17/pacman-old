import scareGhost from "./scareGhost";

export default function eatPowerUp(
  powerUp,
  pacman,
  variables,
  ghosts,
  callback = scareGhost
) {
  if (
    powerUp.position.x === pacman.position.x &&
    powerUp.position.y === pacman.position.y
  ) {
    powerUp.changeEatenState();
    variables.score += 50;
    variables.killCount = 0;
    ghosts.forEach((ghost) => {
      if (!ghost.isRetreating) callback(ghost);
    });
  }
}
