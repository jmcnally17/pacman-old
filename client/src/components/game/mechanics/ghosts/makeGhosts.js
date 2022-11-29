import Ghost from "../../models/ghost";

export default function makeGhosts(variables) {
  return [
    new Ghost(
      {
        position: {
          x: (variables.tileLength * 31) / 2,
          y: (variables.tileLength * 23) / 2,
        },
        velocity: {
          x: 0,
          y: 0,
        },
        colour: "red",
      },
      variables.tileLength
    ),
    new Ghost(
      {
        position: {
          x: (variables.tileLength * 25) / 2,
          y: (variables.tileLength * 23) / 2,
        },
        velocity: {
          x: 0,
          y: 0,
        },
        colour: "pink",
      },
      variables.tileLength
    ),
    new Ghost(
      {
        position: {
          x: (variables.tileLength * 37) / 2,
          y: (variables.tileLength * 29) / 2,
        },
        velocity: {
          x: 0,
          y: 0,
        },
        colour: "cyan",
      },
      variables.tileLength
    ),
    new Ghost(
      {
        position: {
          x: (variables.tileLength * 19) / 2,
          y: (variables.tileLength * 29) / 2,
        },
        velocity: {
          x: 0,
          y: 0,
        },
        colour: "orange",
      },
      variables.tileLength
    ),
  ];
}
