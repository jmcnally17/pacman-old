import Boundary from "../../models/boundary";
import makeTunnelBoundaries from "./makeTunnelBoundaries";

export default function makeBoundaries(map, length) {
  const boundaries = [];
  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === "-") {
        const image = new Image();
        image.src = "./images/pipeHorizontal.png";
        const boundary = new Boundary({
          position: {
            x: length * j,
            y: length * i,
          },
          image: image,
        });
        boundaries.push(boundary);
      } else if (element === "|") {
        const image = new Image();
        image.src = "./images/pipeVertical.png";
        const boundary = new Boundary({
          position: {
            x: length * j,
            y: length * i,
          },
          image: image,
        });
        boundaries.push(boundary);
      } else if (element === "1") {
        const image = new Image();
        image.src = "./images/pipeCorner1.png";
        const boundary = new Boundary({
          position: {
            x: length * j,
            y: length * i,
          },
          image: image,
        });
        boundaries.push(boundary);
      } else if (element === "2") {
        const image = new Image();
        image.src = "./images/pipeCorner2.png";
        const boundary = new Boundary({
          position: {
            x: length * j,
            y: length * i,
          },
          image: image,
        });
        boundaries.push(boundary);
      } else if (element === "3") {
        const image = new Image();
        image.src = "./images/pipeCorner3.png";
        const boundary = new Boundary({
          position: {
            x: length * j,
            y: length * i,
          },
          image: image,
        });
        boundaries.push(boundary);
      } else if (element === "4") {
        const image = new Image();
        image.src = "./images/pipeCorner4.png";
        const boundary = new Boundary({
          position: {
            x: length * j,
            y: length * i,
          },
          image: image,
        });
        boundaries.push(boundary);
      }
    });
    makeTunnelBoundaries(boundaries);
  });

  return boundaries;
}
