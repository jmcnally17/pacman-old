import PacMan from "../../models/pacman";

export default function makePacman(variables) {
  const pacman = new PacMan(
    {
      position: {
        x: (variables.tileLength * 29) / 2,
        y: (variables.tileLength * 47) / 2,
      },
      velocity: {
        x: 0,
        y: 0,
      },
    },
    variables.tileLength
  );
  return pacman;
}
