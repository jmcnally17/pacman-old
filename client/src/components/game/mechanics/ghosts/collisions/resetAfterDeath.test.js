import resetAfterDeath from "./resetAfterDeath";

describe("resetAfterDeath", () => {
  it("resets Pac-Man, the ghosts, the hunting timeout and the last key pressed", () => {
    const mockPacman = {
      reset: () => undefined,
    };
    const mockLastKeyPressed = {
      key: "up",
    };
    const mockGhost = {
      reset: () => undefined,
      resetHuntingState: () => undefined,
      resetRetreatingState: () => undefined,
    };
    const mockGhosts = [mockGhost, mockGhost, mockGhost];
    const mockCount = {
      number: 1,
    };
    const mockHuntingTimeout = {
      timeout: undefined,
    };
    const pacmanResetSpy = jest.spyOn(mockPacman, "reset");
    const ghostResetSpy = jest.spyOn(mockGhost, "reset");
    const ghostResetHuntingSpy = jest.spyOn(mockGhost, "resetHuntingState");
    const ghostResetRetreatingSpy = jest.spyOn(
      mockGhost,
      "resetRetreatingState"
    );
    jest.spyOn(global, "clearTimeout");
    const mockStartHuntingInterval = jest.fn();
    resetAfterDeath(
      mockPacman,
      mockLastKeyPressed,
      mockGhosts,
      mockCount,
      mockHuntingTimeout,
      mockStartHuntingInterval
    );
    expect(pacmanResetSpy).toHaveBeenCalledTimes(1);
    expect(mockLastKeyPressed.key).toBe("");
    expect(ghostResetSpy).toHaveBeenCalledTimes(3);
    expect(ghostResetHuntingSpy).toHaveBeenCalledTimes(3);
    expect(ghostResetRetreatingSpy).toHaveBeenCalledTimes(3);
    expect(mockCount.number).toBe(0);
    expect(clearTimeout).toHaveBeenCalledTimes(1);
    expect(mockStartHuntingInterval).toHaveBeenCalledTimes(1);
  });
});
