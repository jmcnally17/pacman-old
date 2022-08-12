import endGame from "./endGame";

describe("endGame", () => {
  it("calls the necessary functions to end the game", () => {
    const mockVariables = {
      animationId: undefined,
      reactRoot: {
        render: () => undefined,
      },
    };
    const mockPellets = "pellets";
    const mockPowerUps = "powerUps";
    const mockGhosts = "ghosts";
    const mockPacman = "pacman";
    const mockCycleTimer = "cycleTimer";
    const mockCancelAnimationFrame = jest.fn();
    const mockSaveScore = jest.fn();
    const mockResetAfterGameOver = jest.fn();
    jest.spyOn(mockVariables.reactRoot, "render");
    endGame(
      mockVariables,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPacman,
      mockCycleTimer,
      mockCancelAnimationFrame,
      mockSaveScore,
      mockResetAfterGameOver
    );
    expect(mockCancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(mockCancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
    expect(mockSaveScore).toHaveBeenCalledTimes(1);
    expect(mockSaveScore).toHaveBeenCalledWith(mockVariables);
    expect(mockResetAfterGameOver).toHaveBeenCalledTimes(1);
    expect(mockResetAfterGameOver).toHaveBeenCalledWith(
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer
    );
    expect(mockVariables.reactRoot.render).toHaveBeenCalledTimes(1);
  });
});
