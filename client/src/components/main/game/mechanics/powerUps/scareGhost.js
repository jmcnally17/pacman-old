export default function scareGhost(ghost) {
  clearTimeout(ghost.scaredTimeout);
  if (!ghost.isScared) {
    ghost.changeScaredState();
  }
  ghost.scaredTimeout = setTimeout(() => {
    ghost.changeScaredState();
  }, 5000);
}
