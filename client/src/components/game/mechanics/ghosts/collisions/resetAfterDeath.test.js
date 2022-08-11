import resetAfterDeath from "./resetAfterDeath";

describe("resetAfterDeath", () => {
  it("resets Pac-Man, the ghosts, the hunting timeout and the last key pressed", () => {
    const mockPacman = {
      reset: () => undefined,
    };
    const mockLastKeyPressed = {
      key: "up",
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
    const pacmanResetSpy = jest.spyOn(mockPacman, "reset");
    const timerResetSpy = jest.spyOn(mockCycleTimer, "reset");
    const timerStartSpy = jest.spyOn(mockCycleTimer, "start");
    const ghostResetSpy = jest.spyOn(mockGhost, "reset");
    const ghostResetHuntingSpy = jest.spyOn(mockGhost, "resetHuntingState");
    const ghostResetRetreatingSpy = jest.spyOn(
      mockGhost,
      "resetRetreatingState"
    );
    resetAfterDeath(mockPacman, mockLastKeyPressed, mockGhosts, mockCycleTimer);
    expect(pacmanResetSpy).toHaveBeenCalledTimes(1);
    expect(mockLastKeyPressed.key).toBe("");
    expect(timerResetSpy).toHaveBeenCalledTimes(1);
    expect(timerStartSpy).toHaveBeenCalledTimes(1);
    expect(ghostResetSpy).toHaveBeenCalledTimes(3);
    expect(ghostResetHuntingSpy).toHaveBeenCalledTimes(3);
    expect(ghostResetRetreatingSpy).toHaveBeenCalledTimes(3);
  });
});
