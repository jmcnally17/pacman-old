import displayLives from "./displayLives";

let mockCtx;

describe("displayLives", () => {
  beforeEach(() => {
    mockCtx = {
      fillStyle: undefined,
    };
  });

  it("sets ctx fillStyle to yellow", () => {
    displayLives(mockCtx);
    expect(mockCtx.fillStyle).toBe("yellow");
  });
});
