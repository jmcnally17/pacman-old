export default function scareGhosts(ghosts, cycleTimer, scaredTimer) {
  cycleTimer.pause();
  scaredTimer.reset();
  ghosts.forEach((ghost) => {
    if (!ghost.isScared && !ghost.isRetreating) ghost.changeScaredState();
  });
  scaredTimer.start();
}
