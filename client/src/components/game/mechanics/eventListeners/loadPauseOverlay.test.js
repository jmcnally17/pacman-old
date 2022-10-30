import loadPauseOverlay from "./loadPauseOverlay";

let mockCtx;

describe("loadPauseOverlay", () => {
  beforeEach(() => {
    mockCtx = {
      globalAlpha: 1,
      fillStyle: undefined,
      fillRect: () => undefined,
    };
  });

  it("makes the necessary calls on ctx to add a dark black tint onto the screen", () => {
    jest.spyOn(mockCtx, "fillRect");
    loadPauseOverlay(mockCtx);
    expect(mockCtx.globalAlpha).toBe(0.7);
    expect(mockCtx.fillStyle).toBe("black");
    expect(mockCtx.fillRect).toHaveBeenCalledTimes(1);
    expect(mockCtx.fillRect).toHaveBeenCalledWith(0, 0, 896, 992);
  });
});
