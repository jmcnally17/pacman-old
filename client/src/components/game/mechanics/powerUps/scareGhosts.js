export default function scareGhosts(ghosts, scaredTimer) {
  scaredTimer.reset();
  ghosts.forEach((ghost) => {
    if (!ghost.isScared && !ghost.isRetreating) ghost.changeScaredState();
  });
  scaredTimer.start();
}
