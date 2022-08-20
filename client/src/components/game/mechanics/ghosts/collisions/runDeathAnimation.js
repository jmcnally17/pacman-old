export default function runDeathAnimation(variables) {
  cancelAnimationFrame(variables.animationId);
  requestAnimationFrame(runDeathAnimation);
}
