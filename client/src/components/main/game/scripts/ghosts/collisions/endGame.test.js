import endGame from "./endGame";

describe("endGame", () => {
  it("calls the necessary functions to end the game", () => {
    const mockAnimationId = 200;
    const mockScore = {};
    const mockName = "";
    const mockMainEl = {
      render: () => undefined,
    };
    const mockPellets = [];
    const mockPowerUps = [];
    const mockGhosts = [];
    const mockPacman = {};
    const mockLastKeyPressed = {};
    const mockLevel = {};
    const mockCancelAnimationFrame = jest.fn();
    const mockSaveScore = jest.fn();
    const mockResetAfterGameOver = jest.fn();
    endGame(
      mockAnimationId,
      mockScore,
      mockName,
      mockMainEl,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPacman,
      mockLastKeyPressed,
      mockLevel,
      mockCancelAnimationFrame,
      mockSaveScore,
      mockResetAfterGameOver
    );
    expect(mockCancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(mockSaveScore).toHaveBeenCalledTimes(1);
    expect(mockResetAfterGameOver).toHaveBeenCalledTimes(1);
  });
});
