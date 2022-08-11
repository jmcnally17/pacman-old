import Ghost from "../../models/ghost";

export default function makeGhosts(variables) {
  return [
    new Ghost(
      {
        position: {
          x: (variables.length * 31) / 2,
          y: (variables.length * 23) / 2,
        },
        velocity: {
          x: 0,
          y: -variables.length / 8,
        },
        colour: "red",
      },
      variables.length
    ),
    new Ghost(
      {
        position: {
          x: (variables.length * 25) / 2,
          y: (variables.length * 23) / 2,
        },
        velocity: {
          x: 0,
          y: -variables.length / 8,
        },
        colour: "pink",
      },
      variables.length
    ),
    new Ghost(
      {
        position: {
          x: (variables.length * 37) / 2,
          y: (variables.length * 29) / 2,
        },
        velocity: {
          x: variables.length / 8,
          y: 0,
        },
        colour: "cyan",
      },
      variables.length
    ),
    new Ghost(
      {
        position: {
          x: (variables.length * 19) / 2,
          y: (variables.length * 29) / 2,
        },
        velocity: {
          x: -variables.length / 8,
          y: 0,
        },
        colour: "orange",
      },
      variables.length
    ),
  ];
}
