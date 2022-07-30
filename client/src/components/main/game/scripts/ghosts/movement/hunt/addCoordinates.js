export default function addCoordinates(pathway, ghost, length) {
  if (pathway.direction === "up") {
    pathway.position = {
      x: ghost.position.x,
      y: ghost.position.y - length / 8,
    };
  } else if (pathway.direction === "left") {
    pathway.position = {
      x: ghost.position.x - length / 8,
      y: ghost.position.y,
    };
  } else if (pathway.direction === "right") {
    pathway.position = {
      x: ghost.position.x + length / 8,
      y: ghost.position.y,
    };
  } else if (pathway.direction === "down") {
    pathway.position = {
      x: ghost.position.x,
      y: ghost.position.y + length / 8,
    };
  }
}
