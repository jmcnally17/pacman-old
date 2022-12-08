import displayPleaseWait from "./displayPleaseWait";

let mockCtx;

describe("displayPleaseWait", () => {
  beforeEach(() => {
    mockCtx = {
      globalAlpha: 1,
      fillStyle: null,
      fillRect: () => undefined,
    };
  });

  it("adds a black tint to the board so that the Please Wait text stands out", () => {
    jest.spyOn(mockCtx, "fillRect");
    displayPleaseWait(mockCtx);
    expect(mockCtx.globalAlpha).toBe(0.7);
    expect(mockCtx.fillStyle).toBe("black");
    expect(mockCtx.fillRect).toHaveBeenCalledTimes(1);
    expect(mockCtx.fillRect).toHaveBeenCalledWith(0, 0, 896, 992);
  });
});
