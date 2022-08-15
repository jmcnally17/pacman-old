import ghostAttack from "./ghostAttack";

export default function dealWithCollision(
  ghost,
  pacman,
  variables,
  ghosts,
  pellets,
  powerUps,
  cycleTimer,
  scaredTimer,
  callback = ghostAttack
) {
  if (!ghost.isScared && !ghost.isRetreating) {
    callback(
      pacman,
      variables,
      ghosts,
      pellets,
      powerUps,
      cycleTimer,
      scaredTimer
    );
  } else if (ghost.isScared) {
    variables.score += 200 * Math.pow(2, variables.killCount);
    variables.killCount++;
    ghost.changeRetreatingState();
    ghost.retreatingTimer.start();
    ghost.changeScaredState();
  }
}
