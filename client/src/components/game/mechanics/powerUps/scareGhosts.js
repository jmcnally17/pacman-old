export default function scareGhosts(ghosts, scaredTimer) {
  scaredTimer.clear();
  ghosts.forEach((ghost) => {
    if (!ghost.isScared && !ghost.isRetreating) ghost.changeScaredState();
  });
  scaredTimer.start();
}
