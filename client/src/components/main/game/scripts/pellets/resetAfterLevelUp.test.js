import resetAfterLevelUp from "./resetAfterLevelUp";

describe("resetAfterLevelUp", () => {
  it("calls all the necessary functions to reset the board", () => {
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
    const mockPellet = {
      changeEatenState: () => undefined,
    };
    const mockPowerUp = {
      hasBeenEaten: true,
      changeEatenState: () => undefined,
    };
    const mockGhosts = [mockGhost, mockGhost, mockGhost];
    const mockPellets = [mockPellet, mockPellet];
    const mockPowerUps = [mockPowerUp];
    const pacmanResetSpy = jest.spyOn(mockPacman, "reset");
    const ghostResetSpy = jest.spyOn(mockGhost, "reset");
    const ghostResetHuntingSpy = jest.spyOn(mockGhost, "resetHuntingState");
    const intervalSpy = jest.spyOn(global, "setInterval");
    const ghostHuntingSpy = jest.spyOn(mockGhost, "changeHuntingState");
    const pelletChangeEatenStateSpy = jest.spyOn(
      mockPellet,
      "changeEatenState"
    );
    const powerUpChangeEatenStateSpy = jest.spyOn(
      mockPowerUp,
      "changeEatenState"
    );
    resetAfterLevelUp(
      mockPacman,
      mockLastKeyPressed,
      mockGhosts,
      mockPellets,
      mockPowerUps
    );
    expect(pacmanResetSpy).toHaveBeenCalledTimes(1);
    expect(mockLastKeyPressed.key).toBe("");
    expect(ghostResetSpy).toHaveBeenCalledTimes(3);
    expect(ghostResetHuntingSpy).toHaveBeenCalledTimes(3);
    expect(intervalSpy).toHaveBeenCalledTimes(3);
    expect(pelletChangeEatenStateSpy).toHaveBeenCalledTimes(2);
    expect(powerUpChangeEatenStateSpy).toHaveBeenCalledTimes(1);
    jest.runOnlyPendingTimers();
    expect(ghostHuntingSpy).toHaveBeenCalledTimes(3);
  });
});
