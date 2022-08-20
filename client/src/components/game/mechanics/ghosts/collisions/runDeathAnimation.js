export default function runDeathAnimation(variables, ctx, boundaries) {
  cancelAnimationFrame(variables.animationId);
  requestAnimationFrame(runDeathAnimation);
  ctx.clearRect(0, 0, 896, 992);
  boundaries.forEach((boundary) => boundary.draw(ctx));
}
