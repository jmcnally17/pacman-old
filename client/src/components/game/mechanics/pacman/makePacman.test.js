import PacMan from "../../models/pacman";
import makePacman from "./makePacman";

describe("makePacman", () => {
  it("returns a Pac-Man object", () => {
    const mockVariables = {
      length: 32,
    };
    expect(makePacman(mockVariables)).toBeInstanceOf(PacMan);
  });
});
