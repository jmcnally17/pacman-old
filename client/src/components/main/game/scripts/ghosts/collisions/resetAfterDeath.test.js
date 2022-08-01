import resetAfterDeath from "./resetAfterDeath";

describe("resetAfterDeath", () => {
  it("resets Pac-Man and the ghosts as well as the last key pressed", () => {
    const mockPacman = {
      reset: () => undefined,
    };
    const mockLastKeyPressed = {
      key: "up",
    };
    const mockGhost = {
      reset: () => undefined,
      resetHuntingState: () => undefined,
    };
    const mockGhosts = [mockGhost, mockGhost, mockGhost];
    const pacmanResetSpy = jest.spyOn(mockPacman, "reset");
    const ghostResetSpy = jest.spyOn(mockGhost, "reset");
    const ghostResetHuntingSpy = jest.spyOn(mockGhost, "resetHuntingState");
    const mockStartHuntingInterval = jest.fn();
    resetAfterDeath(
      mockPacman,
      mockLastKeyPressed,
      mockGhosts,
      mockStartHuntingInterval
    );
    expect(pacmanResetSpy).toHaveBeenCalledTimes(1);
    expect(mockLastKeyPressed.key).toBe("");
    expect(ghostResetSpy).toHaveBeenCalledTimes(3);
    expect(ghostResetHuntingSpy).toHaveBeenCalledTimes(3);
    expect(mockStartHuntingInterval).toHaveBeenCalledTimes(1);
  });
});
