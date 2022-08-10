import Ghost from "../../models/ghost";

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
      },
      length
    ),
  ];
}
