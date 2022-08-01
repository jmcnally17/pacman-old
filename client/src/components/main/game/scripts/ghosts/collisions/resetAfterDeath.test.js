import resetAfterDeath from "./resetAfterDeath";

describe("resetAfterDeath", () => {
  it("resets Pac-Man and the ghosts as well as the last key pressed", () => {
    jest.useFakeTimers();
    const mockPacman = {
      reset: () => undefined,
    };
    const mockLastKeyPressed = {
      key: "up",
    };
    const mockGhost = {
      reset: () => undefined,
      resetHuntingState: () => undefined,
      changeHuntingState: () => undefined,
      huntingInterval: null,
    };
    const mockGhosts = [mockGhost, mockGhost, mockGhost];
    const pacmanResetSpy = jest.spyOn(mockPacman, "reset");
    const ghostResetSpy = jest.spyOn(mockGhost, "reset");
    const ghostResetHuntingSpy = jest.spyOn(mockGhost, "resetHuntingState");
    const intervalSpy = jest.spyOn(global, "setInterval");
    const ghostHuntingSpy = jest.spyOn(mockGhost, "changeHuntingState");
    resetAfterDeath(mockPacman, mockLastKeyPressed, mockGhosts);
    expect(pacmanResetSpy).toHaveBeenCalledTimes(1);
    expect(mockLastKeyPressed.key).toBe("");
    expect(ghostResetSpy).toHaveBeenCalledTimes(3);
    expect(ghostResetHuntingSpy).toHaveBeenCalledTimes(3);
    expect(intervalSpy).toHaveBeenCalledTimes(3);
    expect(mockGhost.huntingInterval).not.toBeNull();
    jest.runOnlyPendingTimers();
    expect(ghostHuntingSpy).toHaveBeenCalledTimes(3);
  });
});
