import PacMan from "../../models/pacman";

export default function makePacman(length) {
  const pacman = new PacMan(
    {
      position: {
        x: (length * 29) / 2,
        y: (length * 47) / 2,
      },
      velocity: {
        x: 0,
        y: 0,
      },
    },
    length
  );
  return pacman;
}
