import resetAfterDeath from "./resetAfterDeath";

describe("resetAfterDeath", () => {
  it("resets Pac-Man, the ghosts, the hunting timeout, the scared timeout and the last key pressed", () => {
    const mockPacman = {
      reset: () => undefined,
    };
    const mockVariables = {
      lastKeyPressed: "up",
    };
    const mockCycleTimer = {
      reset: () => undefined,
      start: () => undefined,
    };
    const mockScaredTimer = {
      reset: () => undefined,
    };
    const mockGhost = {
      reset: () => undefined,
    };
    const mockGhosts = [mockGhost, mockGhost, mockGhost];
    jest.spyOn(mockPacman, "reset");
    jest.spyOn(mockCycleTimer, "reset");
    jest.spyOn(mockScaredTimer, "reset");
    jest.spyOn(mockCycleTimer, "start");
    jest.spyOn(mockGhost, "reset");
    resetAfterDeath(
      mockPacman,
      mockVariables,
      mockGhosts,
      mockCycleTimer,
      mockScaredTimer
    );
    expect(mockPacman.reset).toHaveBeenCalledTimes(1);
    expect(mockVariables.lastKeyPressed).toBe("");
    expect(mockCycleTimer.reset).toHaveBeenCalledTimes(1);
    expect(mockScaredTimer.reset).toHaveBeenCalledTimes(1);
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
    expect(mockGhost.reset).toHaveBeenCalledTimes(3);
  });
});
