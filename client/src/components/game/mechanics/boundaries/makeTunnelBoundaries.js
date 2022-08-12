import Boundary from "../../models/boundary";

const image = new Image();
image.src = "./images/pipeHorizontal.png";

export default function makeTunnelBoundaries(boundaries, variables) {
  const tunnelBoundaryOne = new Boundary(
    {
      position: {
        x: -variables.tileLength,
        y: variables.tileLength * 13,
      },
      image: image,
    },
    variables.tileLength
  );
  const tunnelBoundaryTwo = new Boundary(
    {
      position: {
        x: -variables.tileLength,
        y: variables.tileLength * 15,
      },
      image: image,
    },
    variables.tileLength
  );
  const tunnelBoundaryThree = new Boundary(
    {
      position: {
        x: variables.tileLength * 28,
        y: variables.tileLength * 13,
      },
      image: image,
    },
    variables.tileLength
  );
  const tunnelBoundaryFour = new Boundary(
    {
      position: {
        x: variables.tileLength * 28,
        y: variables.tileLength * 15,
      },
      image: image,
    },
    variables.tileLength
  );
  boundaries.push(
    tunnelBoundaryOne,
    tunnelBoundaryTwo,
    tunnelBoundaryThree,
    tunnelBoundaryFour
  );
}
