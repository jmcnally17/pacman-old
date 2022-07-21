import Boundary from "../../models/boundary";

const image = new Image();
image.src = "./images/pipeHorizontal.png";

export default function makeTunnelBoundaries(boundaries) {
  const tunnelBoundaryOne = new Boundary({
    position: {
      x: -20,
      y: 260,
    },
    image: image,
  });
  const tunnelBoundaryTwo = new Boundary({
    position: {
      x: -20,
      y: 300,
    },
    image: image,
  });
  const tunnelBoundaryThree = new Boundary({
    position: {
      x: 560,
      y: 260,
    },
    image: image,
  });
  const tunnelBoundaryFour = new Boundary({
    position: {
      x: 560,
      y: 300,
    },
    image: image,
  });
  boundaries.push(
    tunnelBoundaryOne,
    tunnelBoundaryTwo,
    tunnelBoundaryThree,
    tunnelBoundaryFour
  );
}
