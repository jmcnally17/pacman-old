import Ghost from "../../models/ghost";

const redImage = new Image();
redImage.src = "./images/redGhostUp.png";
const pinkImage = new Image();
pinkImage.src = "./images/pinkGhostUp.png";
const cyanImage = new Image();
cyanImage.src = "./images/cyanGhostLeft.png";
const orangeImage = new Image();
orangeImage.src = "./images/orangeGhostRight.png";

export default function makeGhosts() {
  const ghosts = [
    new Ghost({
      position: {
        x: 250,
        y: 230,
      },
      velocity: {
        x: 0,
        y: -Ghost.speed,
      },
      colour: "red",
      image: redImage,
    }),
    new Ghost({
      position: {
        x: 310,
        y: 230,
      },
      velocity: {
        x: 0,
        y: -Ghost.speed,
      },
      colour: "pink",
      image: pinkImage,
    }),
    new Ghost({
      position: {
        x: 190,
        y: 290,
      },
      velocity: {
        x: -Ghost.speed,
        y: 0,
      },
      colour: "cyan",
      image: cyanImage,
    }),
    new Ghost({
      position: {
        x: 370,
        y: 290,
      },
      velocity: {
        x: Ghost.speed,
        y: 0,
      },
      colour: "orange",
      image: orangeImage,
    }),
  ];
  return ghosts;
}
