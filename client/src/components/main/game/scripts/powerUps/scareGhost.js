export default function scareGhost(ghost) {
  ghost.changeScaredState();
  ghost.speed = 2;
  ghost.scaredTimeout = setTimeout(() => {
    ghost.changeScaredState();
    ghost.speed = 2.5;
  }, 5000);
}
