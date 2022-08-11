import endGame from "./endGame";

describe("endGame", () => {
  it("calls the necessary functions to end the game", () => {
    let mockObject;
    const mockMainEl = {
      render: () => undefined,
    };
    const mockCancelAnimationFrame = jest.fn();
    const mockSaveScore = jest.fn();
    const mockResetAfterGameOver = jest.fn();
    const mainElSpy = jest.spyOn(mockMainEl, "render");
    endGame(
      mockObject,
      mockObject,
      mockObject,
      mockMainEl,
      mockObject,
      mockObject,
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
    expect(mainElSpy).toHaveBeenCalledTimes(1);
  });
});
