export default function scareGhost(ghost) {
  ghost.changeScaredState();
  ghost.scaredTimeout = setTimeout(() => {
    ghost.changeScaredState();
  }, 5000);
}
