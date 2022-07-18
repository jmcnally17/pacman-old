import stopPacmanCollision from "./stopPacmanCollision";

export default function implementBoundaries(boundaries, ctx, pacman) {
  boundaries.forEach((boundary) => {
    boundary.draw(ctx);
    stopPacmanCollision(boundary, pacman);
  });
}
