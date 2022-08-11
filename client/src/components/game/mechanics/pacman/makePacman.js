import PacMan from "../../models/pacman";

export default function makePacman(variables) {
  const pacman = new PacMan(
    {
      position: {
        x: (variables.length * 29) / 2,
        y: (variables.length * 47) / 2,
      },
      velocity: {
        x: 0,
        y: 0,
      },
    },
    variables.length
  );
  return pacman;
}
