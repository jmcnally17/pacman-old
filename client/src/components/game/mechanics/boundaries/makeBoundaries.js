import Boundary from "../../models/boundary";
import makeTunnelBoundaries from "./makeTunnelBoundaries";

export default function makeBoundaries(
  map,
  variables,
  callback = makeTunnelBoundaries
) {
  const boundaries = [];
  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === "-") {
        const regularImage = new Image();
        regularImage.src = "./images/pipeHorizontal.png";
        const whiteImage = new Image();
        whiteImage.src = "./images/pipeHorizontalWhite.png";
        const boundary = new Boundary(
          {
            position: {
              x: variables.tileLength * j,
              y: variables.tileLength * i,
            },
            regularImage: regularImage,
            whiteImage: whiteImage,
          },
          variables.tileLength
        );
        boundaries.push(boundary);
      } else if (element === "|") {
        const regularImage = new Image();
        regularImage.src = "./images/pipeVertical.png";
        const whiteImage = new Image();
        whiteImage.src = "./images/pipeVerticalWhite.png";
        const boundary = new Boundary(
          {
            position: {
              x: variables.tileLength * j,
              y: variables.tileLength * i,
            },
            regularImage: regularImage,
            whiteImage: whiteImage,
          },
          variables.tileLength
        );
        boundaries.push(boundary);
      } else if (element === "1") {
        const regularImage = new Image();
        regularImage.src = "./images/pipeCornerOne.png";
        const whiteImage = new Image();
        whiteImage.src = "./images/pipeCornerOneWhite.png";
        const boundary = new Boundary(
          {
            position: {
              x: variables.tileLength * j,
              y: variables.tileLength * i,
            },
            regularImage: regularImage,
            whiteImage: whiteImage,
          },
          variables.tileLength
        );
        boundaries.push(boundary);
      } else if (element === "2") {
        const regularImage = new Image();
        regularImage.src = "./images/pipeCornerTwo.png";
        const whiteImage = new Image();
        whiteImage.src = "./images/pipeCornerTwoWhite.png";
        const boundary = new Boundary(
          {
            position: {
              x: variables.tileLength * j,
              y: variables.tileLength * i,
            },
            regularImage: regularImage,
            whiteImage: whiteImage,
          },
          variables.tileLength
        );
        boundaries.push(boundary);
      } else if (element === "3") {
        const regularImage = new Image();
        regularImage.src = "./images/pipeCornerThree.png";
        const whiteImage = new Image();
        whiteImage.src = "./images/pipeCornerThreeWhite.png";
        const boundary = new Boundary(
          {
            position: {
              x: variables.tileLength * j,
              y: variables.tileLength * i,
            },
            regularImage: regularImage,
            whiteImage: whiteImage,
          },
          variables.tileLength
        );
        boundaries.push(boundary);
      } else if (element === "4") {
        const regularImage = new Image();
        regularImage.src = "./images/pipeCornerFour.png";
        const whiteImage = new Image();
        whiteImage.src = "./images/pipeCornerFourWhite.png";
        const boundary = new Boundary(
          {
            position: {
              x: variables.tileLength * j,
              y: variables.tileLength * i,
            },
            regularImage: regularImage,
            whiteImage: whiteImage,
          },
          variables.tileLength
        );
        boundaries.push(boundary);
      }
    });
  });
  callback(boundaries, variables);
  return boundaries;
}
