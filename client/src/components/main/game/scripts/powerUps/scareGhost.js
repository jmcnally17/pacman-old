export default function scareGhost(ghost) {
  if (!ghost.isScared) {
    ghost.changeScaredState();
  }
  ghost.scaredTimeout = setTimeout(() => {
    ghost.changeScaredState();
  }, 5000);
}
