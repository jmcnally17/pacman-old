import displayPleaseWaitText from "./displayPleaseWaitText";

describe("displayPleaseWaitText", () => {
  it("renders 'Please wait...' text on the screen", () => {
    const mockCtx = {
      font: null,
      fillStyle: null,
      textAlign: null,
      textBaseline: null,
      fillText: () => undefined,
    };
    jest.spyOn(mockCtx, "fillText");
    displayPleaseWaitText(mockCtx);
    expect(mockCtx.font).toBe("100px Arial");
    expect(mockCtx.fillStyle).toBe("white");
    expect(mockCtx.textAlign).toBe("center");
    expect(mockCtx.textBaseline).toBe("middle");
    expect(mockCtx.fillText).toHaveBeenCalledTimes(1);
    expect(mockCtx.fillText).toHaveBeenCalledWith("Please wait...", 448, 496);
  });
});
