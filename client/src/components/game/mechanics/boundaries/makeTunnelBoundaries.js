import Boundary from "../../models/boundary";

const image = new Image();
image.src = "./images/pipeHorizontal.png";

export default function makeTunnelBoundaries(boundaries, variables) {
  const tunnelBoundaryOne = new Boundary(
    {
      position: {
        x: -variables.length,
        y: variables.length * 13,
      },
      image: image,
    },
    variables.length
  );
  const tunnelBoundaryTwo = new Boundary(
    {
      position: {
        x: -variables.length,
        y: variables.length * 15,
      },
      image: image,
    },
    variables.length
  );
  const tunnelBoundaryThree = new Boundary(
    {
      position: {
        x: variables.length * 28,
        y: variables.length * 13,
      },
      image: image,
    },
    variables.length
  );
  const tunnelBoundaryFour = new Boundary(
    {
      position: {
        x: variables.length * 28,
        y: variables.length * 15,
      },
      image: image,
    },
    variables.length
  );
  boundaries.push(
    tunnelBoundaryOne,
    tunnelBoundaryTwo,
    tunnelBoundaryThree,
    tunnelBoundaryFour
  );
}
