import runDeathAnimation from "./runDeathAnimation";

let mockVariables;
let mockCtx;
let mockBoundary;
let mockBoundaries;

describe("runDeathAnimation", () => {
  beforeEach(() => {
    mockVariables = {
      animationId: 1956382,
    };
    mockCtx = {
      clearRect: () => undefined,
    };
    mockBoundary = {
      draw: () => undefined,
    };
    mockBoundaries = [mockBoundary, mockBoundary];
  });

  it("cancels the current animation frame", () => {
    jest.spyOn(global, "cancelAnimationFrame");
    runDeathAnimation(mockVariables, mockCtx, mockBoundaries);
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("calls requestAnimationFrame on itself", () => {
    jest.spyOn(global, "requestAnimationFrame");
    runDeathAnimation(mockVariables, mockCtx, mockBoundaries);
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    expect(requestAnimationFrame).toHaveBeenCalledWith(runDeathAnimation);
  });

  it("calls clearRect on the ctx with the board dimensions", () => {
    jest.spyOn(mockCtx, "clearRect");
    runDeathAnimation(mockVariables, mockCtx, mockBoundaries);
    expect(mockCtx.clearRect).toHaveBeenCalledTimes(1);
    expect(mockCtx.clearRect).toHaveBeenCalledWith(0, 0, 896, 992);
  });

  it("calls draw on all the boundaries", () => {
    jest.spyOn(mockBoundary, "draw");
    runDeathAnimation(mockVariables, mockCtx, mockBoundaries);
    expect(mockBoundary.draw).toHaveBeenCalledTimes(2);
    expect(mockBoundary.draw).toHaveBeenNthCalledWith(1, mockCtx);
    expect(mockBoundary.draw).toHaveBeenNthCalledWith(2, mockCtx);
  });
});
