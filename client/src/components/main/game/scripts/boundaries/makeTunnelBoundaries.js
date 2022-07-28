import Boundary from "../../models/boundary";

const image = new Image();
image.src = "./images/pipeHorizontal.png";

export default function makeTunnelBoundaries(boundaries, length) {
  const tunnelBoundaryOne = new Boundary(
    {
      position: {
        x: -length,
        y: length * 13,
      },
      image: image,
    },
    length
  );
  const tunnelBoundaryTwo = new Boundary(
    {
      position: {
        x: -length,
        y: length * 15,
      },
      image: image,
    },
    length
  );
  const tunnelBoundaryThree = new Boundary(
    {
      position: {
        x: length * 28,
        y: length * 13,
      },
      image: image,
    },
    length
  );
  const tunnelBoundaryFour = new Boundary(
    {
      position: {
        x: length * 28,
        y: length * 15,
      },
      image: image,
    },
    length
  );
  boundaries.push(
    tunnelBoundaryOne,
    tunnelBoundaryTwo,
    tunnelBoundaryThree,
    tunnelBoundaryFour
  );
}
