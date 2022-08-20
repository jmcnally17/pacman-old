import runDeathAnimation from "./runDeathAnimation";

let mockVariables;
let mockCtx;

describe("runDeathAnimation", () => {
  beforeEach(() => {
    mockVariables = {
      animationId: 1956382,
    };
    mockCtx = {
      clearRect: () => undefined,
    };
  });

  it("cancels the current animation frame", () => {
    jest.spyOn(global, "cancelAnimationFrame");
    runDeathAnimation(mockVariables, mockCtx);
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("calls requestAnimationFrame on itself", () => {
    jest.spyOn(global, "requestAnimationFrame");
    runDeathAnimation(mockVariables, mockCtx);
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    expect(requestAnimationFrame).toHaveBeenCalledWith(runDeathAnimation);
  });

  it("calls clearRect on the ctx with the board dimensions", () => {
    jest.spyOn(mockCtx, "clearRect");
    runDeathAnimation(mockVariables, mockCtx);
    expect(mockCtx.clearRect).toHaveBeenCalledTimes(1);
    expect(mockCtx.clearRect).toHaveBeenCalledWith(0, 0, 896, 992);
  });
});
