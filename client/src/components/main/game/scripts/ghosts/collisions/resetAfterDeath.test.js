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
    };
    const mockGhosts = [mockGhost, mockGhost, mockGhost];
    const pacmanResetSpy = jest.spyOn(mockPacman, "reset");
    const ghostResetSpy = jest.spyOn(mockGhost, "reset");
    resetAfterDeath(mockPacman, mockLastKeyPressed, mockGhosts);
    expect(pacmanResetSpy).toHaveBeenCalledTimes(1);
    expect(mockLastKeyPressed.key).toBe("");
    expect(ghostResetSpy).toHaveBeenCalledTimes(3);
  });
});
