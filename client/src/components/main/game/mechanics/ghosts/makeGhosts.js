import Ghost from "../../models/ghost";

const redImage = new Image();
redImage.src = "./images/redGhostUp.png";
const pinkImage = new Image();
pinkImage.src = "./images/pinkGhostUp.png";
const cyanImage = new Image();
cyanImage.src = "./images/cyanGhostLeft.png";
const orangeImage = new Image();
orangeImage.src = "./images/orangeGhostRight.png";

export default function makeGhosts(length) {
  return [
    new Ghost(
      {
        position: {
          x: (length * 31) / 2,
          y: (length * 23) / 2,
        },
        velocity: {
          x: 0,
          y: -length / 8,
        },
        colour: "red",
        image: redImage,
      },
      length
    ),
    new Ghost(
      {
        position: {
          x: (length * 25) / 2,
          y: (length * 23) / 2,
        },
        velocity: {
          x: 0,
          y: -length / 8,
        },
        colour: "pink",
        image: pinkImage,
      },
      length
    ),
    new Ghost(
      {
        position: {
          x: (length * 37) / 2,
          y: (length * 29) / 2,
        },
        velocity: {
          x: length / 8,
          y: 0,
        },
        colour: "cyan",
        image: cyanImage,
      },
      length
    ),
    new Ghost(
      {
        position: {
          x: (length * 19) / 2,
          y: (length * 29) / 2,
        },
        velocity: {
          x: -length / 8,
          y: 0,
        },
        colour: "orange",
        image: orangeImage,
      },
      length
    ),
  ];
}
