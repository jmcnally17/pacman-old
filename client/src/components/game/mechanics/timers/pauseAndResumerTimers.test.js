import pauseAndResumeTimers from "./pauseAndResumeTimers";

let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimer;
let mockRetreatingTimers;
let visibilityChange;

describe("pauseAndResumeTimers", () => {
  beforeEach(() => {
    mockVariables = {
      windowIsVisible: true,
    };
    mockCycleTimer = {
      pause: () => undefined,
      resume: () => undefined,
    };
    mockScaredTimer = {
      isRunning: false,
      pause: () => undefined,
      resume: () => undefined,
    };
    mockRetreatingTimer = {
      isRunning: false,
      pause: () => undefined,
      resume: () => undefined,
    };
    mockRetreatingTimers = [
      mockRetreatingTimer,
      mockRetreatingTimer,
      mockRetreatingTimer,
      mockRetreatingTimer,
    ];
    visibilityChange = new Event("visibilitychange");
    jest.spyOn(mockCycleTimer, "pause");
    jest.spyOn(mockCycleTimer, "resume");
    jest.spyOn(mockScaredTimer, "pause");
    jest.spyOn(mockScaredTimer, "resume");
    jest.spyOn(mockRetreatingTimer, "pause");
    jest.spyOn(mockRetreatingTimer, "resume");
    pauseAndResumeTimers(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers
    );
  });

  it("changes windowIsVisible to false when it is true", () => {
    document.dispatchEvent(visibilityChange);
    expect(mockVariables.windowIsVisible).toBeFalsy();
  });

  it("changes windowIsVisible to true when it is false", () => {
    mockVariables.windowIsVisible = false;
    document.dispatchEvent(visibilityChange);
    expect(mockVariables.windowIsVisible).toBeTruthy();
  });

  it("pauses the cycle timer if the scared timer is not running and the window is initially visible", () => {
    document.dispatchEvent(visibilityChange);
    expect(mockCycleTimer.pause).toHaveBeenCalledTimes(1);
  });

  it("resumes the cycle timer if the scared timer is not running and the window is initially invisible", () => {
    mockVariables.windowIsVisible = false;
    document.dispatchEvent(visibilityChange);
    expect(mockCycleTimer.resume).toHaveBeenCalledTimes(1);
  });
});
