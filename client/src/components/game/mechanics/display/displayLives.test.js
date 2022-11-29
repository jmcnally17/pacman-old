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
    mockVariables = "variables";
    jest.spyOn(mockCtx, "beginPath");
    jest.spyOn(mockCtx, "arc");
    jest.spyOn(mockCtx, "lineTo");
    jest.spyOn(mockCtx, "fill");
    jest.spyOn(mockCtx, "closePath");
  });

  it("calls beginPath on ctx to begin drawing Pac-Man", () => {
    displayLives(mockCtx, mockVariables);
    expect(mockCtx.beginPath).toHaveBeenCalledTimes(1);
  });

  it("calls arc on ctx to begin drawing Pac-Man", () => {
    displayLives(mockCtx, mockVariables);
    expect(mockCtx.arc).toHaveBeenCalledTimes(1);
    expect(mockCtx.arc).toHaveBeenCalledWith(
      580,
      15,
      15,
      Math.PI / 4,
      (Math.PI * 7) / 4
    );
  });

  it("calls lineTo on ctx to draw Pac-Man's mouth", () => {
    displayLives(mockCtx, mockVariables);
    expect(mockCtx.lineTo).toHaveBeenCalledTimes(1);
    expect(mockCtx.lineTo).toHaveBeenCalledWith(575, 15);
  });

  it("sets ctx fillStyle to yellow", () => {
    displayLives(mockCtx, mockVariables);
    expect(mockCtx.fillStyle).toBe("yellow");
  });

  it("calls fill in order to colour the icon in", () => {
    displayLives(mockCtx, mockVariables);
    expect(mockCtx.fill).toHaveBeenCalledTimes(1);
  });
});
