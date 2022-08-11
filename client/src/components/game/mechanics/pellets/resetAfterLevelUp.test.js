import resetAfterLevelUp from "./resetAfterLevelUp";

describe("resetAfterLevelUp", () => {
  it("calls all the necessary functions to reset the board", () => {
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
    const mockCycleTimer = {
      reset: () => undefined,
      start: () => undefined,
    };
    const pacmanResetSpy = jest.spyOn(mockPacman, "reset");
    const ghostResetSpy = jest.spyOn(mockGhost, "reset");
    const ghostResetHuntingSpy = jest.spyOn(mockGhost, "resetHuntingState");
    const ghostResetRetreatingSpy = jest.spyOn(
      mockGhost,
      "resetRetreatingState"
    );
    const timerResetSpy = jest.spyOn(mockCycleTimer, "reset");
    const timerStartSpy = jest.spyOn(mockCycleTimer, "start");
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
      mockPowerUps,
      mockCycleTimer
    );
    expect(pacmanResetSpy).toHaveBeenCalledTimes(1);
    expect(mockLastKeyPressed.key).toBe("");
    expect(timerResetSpy).toHaveBeenCalledTimes(1);
    expect(ghostResetSpy).toHaveBeenCalledTimes(3);
    expect(ghostResetHuntingSpy).toHaveBeenCalledTimes(3);
    expect(ghostResetRetreatingSpy).toHaveBeenCalledTimes(3);
    expect(timerStartSpy).toHaveBeenCalledTimes(1);
    expect(pelletChangeEatenStateSpy).toHaveBeenCalledTimes(2);
    expect(powerUpChangeEatenStateSpy).toHaveBeenCalledTimes(1);
  });
});
