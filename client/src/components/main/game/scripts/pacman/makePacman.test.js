import PacMan from "../../models/pacman";
import makePacman from "./makePacman";

describe("makePacman", () => {
  it("returns a Pac-Man object", () => {
    expect(makePacman(20)).toBeInstanceOf(PacMan);
  });
});
