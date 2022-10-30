import loadPauseText from "./loadPauseText";

describe("loadPauseText", () => {
  it("adds the pause text onto the screen", () => {
    const mockCtx = {
      globalAlpha: undefined,
      font: undefined,
      fillStyle: undefined,
      textAlign: undefined,
      fillText: () => undefined,
    };
    jest.spyOn(mockCtx, "fillText");
    loadPauseText(mockCtx);
    expect(mockCtx.globalAlpha).toBe(1);
    expect(mockCtx.font).toBe("50px Arial");
    expect(mockCtx.fillStyle).toBe("white");
    expect(mockCtx.textAlign).toBe("center");
    expect(mockCtx.fillText).toHaveBeenCalledTimes(1);
    expect(mockCtx.fillText).toHaveBeenCalledWith("Paused", 448, 576);
  });
});
