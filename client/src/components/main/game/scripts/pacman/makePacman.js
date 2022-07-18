import PacMan from "../../models/pacman";

export default function makePacman() {
  const pacman = new PacMan({
    position: {
      x: 290,
      y: 470,
    },
    velocity: {
      x: 0,
      y: 0,
    },
  });
  return pacman;
}
