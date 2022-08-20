export default function runDeathAnimation(variables, ctx) {
  cancelAnimationFrame(variables.animationId);
  requestAnimationFrame(runDeathAnimation);
  ctx.clearRect(0, 0, 896, 992);
}
