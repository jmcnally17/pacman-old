import loadPauseTint from "./loadPauseTint";

describe("loadPauseOverlay", () => {
  it("adds a dark black tint onto the screen", () => {
    const mockCtx = {
      globalAlpha: undefined,
      fillStyle: undefined,
      fillRect: () => undefined,
    };
    jest.spyOn(mockCtx, "fillRect");
    loadPauseTint(mockCtx);
    expect(mockCtx.globalAlpha).toBe(0.7);
    expect(mockCtx.fillStyle).toBe("black");
    expect(mockCtx.fillRect).toHaveBeenCalledTimes(1);
    expect(mockCtx.fillRect).toHaveBeenCalledWith(0, 0, 896, 992);
  });
});
