import pauseAndResumeCycle from "./pauseAndResumeCycle";

let mockCycleTimer;
let mockVariables;
let visibilityChange;

describe("pauseAndResumeCycle", () => {
  beforeEach(() => {
    mockCycleTimer = {
      pause: () => undefined,
      resume: () => undefined,
    };
    mockVariables = {
      windowIsVisible: true,
    };
    visibilityChange = new Event("visibilitychange");
    jest.spyOn(mockCycleTimer, "pause");
    jest.spyOn(mockCycleTimer, "resume");
  });

  it("pauses the cycle when the window becomes invisible", () => {
    pauseAndResumeCycle(mockCycleTimer, mockVariables);
    document.dispatchEvent(visibilityChange);
    expect(mockCycleTimer.pause).toHaveBeenCalledTimes(1);
    expect(mockCycleTimer.resume).toHaveBeenCalledTimes(0);
    expect(mockVariables.windowIsVisible).toBeFalsy();
  });

  it("resumes the cycle when the window becomes visible", () => {
    mockVariables.windowIsVisible = false;
    pauseAndResumeCycle(mockCycleTimer, mockVariables);
    document.dispatchEvent(visibilityChange);
    expect(mockCycleTimer.pause).toHaveBeenCalledTimes(0);
    expect(mockCycleTimer.resume).toHaveBeenCalledTimes(1);
    expect(mockVariables.windowIsVisible).toBeTruthy();
  });
});
