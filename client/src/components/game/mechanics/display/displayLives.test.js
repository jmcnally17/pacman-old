import displayLives from "./displayLives";

let mockCtx;
let mockVariables;

describe("displayLives", () => {
  beforeEach(() => {
    mockCtx = {
      beginPath: () => undefined,
      arc: () => undefined,
      lineTo: () => undefined,
      fillStyle: undefined,
      fill: () => undefined,
      closePath: () => undefined,
    };
    mockVariables = {
      tileLength: 32,
    };
    jest.spyOn(mockCtx, "beginPath");
    jest.spyOn(mockCtx, "arc");
    jest.spyOn(mockCtx, "lineTo");
    jest.spyOn(mockCtx, "fill");
    jest.spyOn(mockCtx, "closePath");
  });

  it("sets ctx fillStyle to yellow", () => {
    displayLives(mockCtx, mockVariables);
    expect(mockCtx.fillStyle).toBe("yellow");
  });

  it("calls beginPath on ctx to begin drawing Pac-Man", () => {
    displayLives(mockCtx, mockVariables);
    expect(mockCtx.beginPath).toHaveBeenCalledTimes(1);
  });
});
