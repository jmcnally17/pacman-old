export default function deleteScaredTimeout(ghost) {
  clearTimeout(ghost.scaredTimeout);
}
