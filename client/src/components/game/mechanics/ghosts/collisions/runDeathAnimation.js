export default function runDeathAnimation(
  variables,
  ctx,
  boundaries,
  pellets,
  powerUps,
  pacman
) {
  variables.animationId = requestAnimationFrame(runDeathAnimation);
  ctx.clearRect(0, 0, 896, 992);
  boundaries.forEach((boundary) => boundary.draw(ctx));
  pellets.forEach((pellet) => {
    if (!pellet.hasBeenEaten) pellet.draw(ctx);
  });
  powerUps.forEach((powerUp) => {
    if (!powerUp.hasBeenEaten) powerUp.update(ctx);
  });
  pacman.shrink(ctx);
}
