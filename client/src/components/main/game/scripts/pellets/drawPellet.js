export default function drawPellet(pellet, ctx) {
  if (!pellet.hasBeenEaten) {
    pellet.draw(ctx);
  }
}
