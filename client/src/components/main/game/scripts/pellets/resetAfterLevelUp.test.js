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
    expect(pelletChangeEatenStateSpy).toHaveBeenCalledTimes(2);
    expect(powerUpChangeEatenStateSpy).toHaveBeenCalledTimes(1);
  });
});
