import runDeathAnimation from "./runDeathAnimation";

let mockVariables;

describe("runDeathAnimation", () => {
  beforeEach(() => {
    mockVariables = {
      animationId: 1956382,
    };
  });

  it("cancels the current animation frame", () => {
    jest.spyOn(global, "cancelAnimationFrame");
    runDeathAnimation(mockVariables);
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("calls requestAnimationFrame on itself", () => {
    jest.spyOn(global, "requestAnimationFrame");
    runDeathAnimation(mockVariables);
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    expect(requestAnimationFrame).toHaveBeenCalledWith(runDeathAnimation);
  });
});
