import Boundary from "../../models/boundary";
import makeTunnelBoundaries from "./makeTunnelBoundaries";

export default function makeBoundaries(map, length) {
  const boundaries = [];
  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === "-") {
        const boundary = new Boundary({
          position: {
            x: length * j,
            y: length * i,
          },
        });
        boundaries.push(boundary);
      }
    });
    makeTunnelBoundaries(boundaries);
  });

  return boundaries;
}
