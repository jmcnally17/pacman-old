import displayLives from "./displayLives";

let mockCtx;
let mockVariables;

describe("displayLives", () => {
  beforeEach(() => {
    mockCtx = {
      fillStyle: undefined,
    };
    mockVariables = "variables";
  });

  it("sets ctx fillStyle to yellow", () => {
    displayLives(mockCtx, mockVariables);
    expect(mockCtx.fillStyle).toBe("yellow");
  });
});
