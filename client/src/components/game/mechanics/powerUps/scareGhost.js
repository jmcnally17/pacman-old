import clearScaredTimeout from "./clearScaredTimeout";

export default function scareGhost(ghost, callback = clearScaredTimeout) {
  callback(ghost);
  if (!ghost.isScared) {
    ghost.changeScaredState();
  }
  ghost.scaredTimeout = setTimeout(() => {
    ghost.changeScaredState();
  }, 5000);
}
