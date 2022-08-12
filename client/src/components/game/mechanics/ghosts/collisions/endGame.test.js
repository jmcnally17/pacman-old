import endGame from "./endGame";

describe("endGame", () => {
  it("calls the necessary functions to end the game", () => {
    const mockVariables = {
      animationId: undefined,
      reactRoot: {
        render: () => undefined,
      },
    };
    let mockObject;
    const mockCancelAnimationFrame = jest.fn();
    const mockSaveScore = jest.fn();
    const mockResetAfterGameOver = jest.fn();
    const renderSpy = jest.spyOn(mockVariables.reactRoot, "render");
    endGame(
      mockVariables,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockCancelAnimationFrame,
      mockSaveScore,
      mockResetAfterGameOver
    );
    expect(mockCancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(mockSaveScore).toHaveBeenCalledTimes(1);
    expect(mockResetAfterGameOver).toHaveBeenCalledTimes(1);
    expect(renderSpy).toHaveBeenCalledTimes(1);
  });
});
