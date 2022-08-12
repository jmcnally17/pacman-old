export default function addCoordinates(pathway, ghost, variables) {
  if (pathway.direction === "up") {
    pathway.position = {
      x: ghost.position.x,
      y: ghost.position.y - variables.length / 8,
    };
  } else if (pathway.direction === "left") {
    pathway.position = {
      x: ghost.position.x - variables.length / 8,
      y: ghost.position.y,
    };
  } else if (pathway.direction === "right") {
    pathway.position = {
      x: ghost.position.x + variables.length / 8,
      y: ghost.position.y,
    };
  } else if (pathway.direction === "down") {
    pathway.position = {
      x: ghost.position.x,
      y: ghost.position.y + variables.length / 8,
    };
  }
}
