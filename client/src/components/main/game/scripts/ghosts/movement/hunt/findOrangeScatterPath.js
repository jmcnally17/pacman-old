export default function findOrangeScatterPath(orangeGhost) {
  return {
    x: 48 - orangeGhost.position.x,
    y: 912 - orangeGhost.position.y,
  };
}
