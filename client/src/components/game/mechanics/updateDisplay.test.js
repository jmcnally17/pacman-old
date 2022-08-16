import updateDisplay from "./updateDisplay";

describe("updateDisplay", () => {
  it("calls the three display functions to show the player the game details", () => {
    const mockPacman = "pacman";
    const mockvariables = "variables";
    const mockDisplayLevel = jest.fn();
    const mockDisplayLives = jest.fn();
    const mockDisplayScore = jest.fn();
    updateDisplay(
      mockPacman,
      mockvariables,
      mockDisplayLevel,
      mockDisplayLives,
      mockDisplayScore
    );
    expect(mockDisplayLevel).toHaveBeenCalledTimes(1);
    expect(mockDisplayLevel).toHaveBeenCalledWith(mockvariables);
    expect(mockDisplayLives).toHaveBeenCalledTimes(1);
    expect(mockDisplayLives).toHaveBeenCalledWith(mockPacman);
    expect(mockDisplayScore).toHaveBeenCalledTimes(1);
    expect(mockDisplayScore).toHaveBeenCalledWith(mockvariables);
  });
});
