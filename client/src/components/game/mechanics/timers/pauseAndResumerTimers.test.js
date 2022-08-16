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
  });

  it("changes windowIsVisible to false when it is true", () => {
    pauseAndResumeTimers(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers
    );
    document.dispatchEvent(visibilityChange);
    expect(mockVariables.windowIsVisible).toBeFalsy();
  });

  it("changes windowIsVisible to true when it is false", () => {
    pauseAndResumeTimers(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers
    );
    mockVariables.windowIsVisible = false;
    document.dispatchEvent(visibilityChange);
    expect(mockVariables.windowIsVisible).toBeTruthy();
  });
});
