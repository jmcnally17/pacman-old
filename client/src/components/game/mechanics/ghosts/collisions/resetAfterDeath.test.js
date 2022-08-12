import resetAfterDeath from "./resetAfterDeath";

describe("resetAfterDeath", () => {
  it("resets Pac-Man, the ghosts, the hunting timeout and the last key pressed", () => {
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
    const mockGhost = {
      reset: () => undefined,
      resetHuntingState: () => undefined,
      resetRetreatingState: () => undefined,
    };
    const mockGhosts = [mockGhost, mockGhost, mockGhost];
    jest.spyOn(mockPacman, "reset");
    jest.spyOn(mockCycleTimer, "reset");
    jest.spyOn(mockCycleTimer, "start");
    jest.spyOn(mockGhost, "reset");
    jest.spyOn(mockGhost, "resetHuntingState");
    jest.spyOn(mockGhost, "resetRetreatingState");
    resetAfterDeath(mockPacman, mockVariables, mockGhosts, mockCycleTimer);
    expect(mockPacman.reset).toHaveBeenCalledTimes(1);
    expect(mockVariables.lastKeyPressed).toBe("");
    expect(mockCycleTimer.reset).toHaveBeenCalledTimes(1);
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
    expect(mockGhost.reset).toHaveBeenCalledTimes(3);
    expect(mockGhost.resetHuntingState).toHaveBeenCalledTimes(3);
    expect(mockGhost.resetRetreatingState).toHaveBeenCalledTimes(3);
  });
});
