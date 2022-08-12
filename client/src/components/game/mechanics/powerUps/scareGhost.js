import deleteScaredTimeout from "./deleteScaredTimeout";

export default function scareGhost(ghost, callback = deleteScaredTimeout) {
  callback(ghost);
  if (!ghost.isScared) {
    ghost.changeScaredState();
  }
  ghost.scaredTimeout = setTimeout(() => {
    ghost.changeScaredState();
  }, 5000);
}
