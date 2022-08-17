import implementObjects from "./implementObjects";

describe("implementObjects", () => {
  it("calls the necessary functions to implement all of the different objects", () => {
    const mockBoundaries = "boundaries";
    const mockGhosts = "ghosts";
    const mockPacman = "pacman";
    const mockPellets = "pellets";
    const mockPowerUps = "powerUps";
    const mockCycleTimer = "cycleTimer";
    const mockScaredTimer = "scaredTimer";
    const mockCtx = "ctx";
    const mockVariables = "variables";
    const mockImplementBoundaries = jest.fn();
    const mockImplementPellets = jest.fn();
    const mockImplementPowerUps = jest.fn();
    const mockImplementGhosts = jest.fn();
    const mockImplementPacman = jest.fn();
    implementObjects(
      mockBoundaries,
      mockGhosts,
      mockPacman,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer,
      mockCtx,
      mockVariables,
      mockImplementBoundaries,
      mockImplementPellets,
      mockImplementPowerUps,
      mockImplementGhosts,
      mockImplementPacman
    );
    expect(mockImplementBoundaries).toHaveBeenCalledTimes(1);
    expect(mockImplementBoundaries).toHaveBeenCalledWith(
      mockBoundaries,
      mockCtx,
      mockPacman
    );
    expect(mockImplementPellets).toHaveBeenCalledTimes(1);
    expect(mockImplementPellets).toHaveBeenCalledWith(
      mockPellets,
      mockCtx,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer
    );
    expect(mockImplementPowerUps).toHaveBeenCalledTimes(1);
    expect(mockImplementPowerUps).toHaveBeenCalledWith(
      mockPowerUps,
      mockCtx,
      mockPacman,
      mockVariables,
      mockGhosts,
      mockScaredTimer,
      mockCycleTimer
    );
    expect(mockImplementGhosts).toHaveBeenCalledTimes(1);
    expect(mockImplementGhosts).toHaveBeenCalledWith(
      mockGhosts,
      mockBoundaries,
      mockCtx,
      mockVariables,
      mockPacman,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockScaredTimer
    );
    expect(mockImplementPacman).toHaveBeenCalledTimes(1);
    expect(mockImplementPacman).toHaveBeenCalledWith(
      mockVariables,
      mockPacman,
      mockBoundaries,
      mockCtx,
      mockPellets
    );
  });
});
