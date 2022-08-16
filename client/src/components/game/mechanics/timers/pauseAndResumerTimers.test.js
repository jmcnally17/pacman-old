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
      isRunning: true,
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
    expect(mockScaredTimer.pause).toHaveBeenCalledTimes(0);
  });

  it("resumes the cycle timer if the scared timer is not running and the window is initially invisible", () => {
    mockVariables.windowIsVisible = false;
    document.dispatchEvent(visibilityChange);
    expect(mockCycleTimer.resume).toHaveBeenCalledTimes(1);
    expect(mockScaredTimer.resume).toHaveBeenCalledTimes(0);
  });

  it("pauses the scared timer if the scared timer is running and the window is initially visible", () => {
    mockScaredTimer.isRunning = true;
    document.dispatchEvent(visibilityChange);
    expect(mockCycleTimer.pause).toHaveBeenCalledTimes(0);
    expect(mockScaredTimer.pause).toHaveBeenCalledTimes(1);
  });

  it("resumes the scared timer if the scared timer is running and the window is initially invisible", () => {
    mockScaredTimer.isRunning = true;
    mockVariables.windowIsVisible = false;
    document.dispatchEvent(visibilityChange);
    expect(mockCycleTimer.resume).toHaveBeenCalledTimes(0);
    expect(mockScaredTimer.resume).toHaveBeenCalledTimes(1);
  });

  it("pauses the retreating timer if it is running and the window is initially visible", () => {
    document.dispatchEvent(visibilityChange);
    expect(mockRetreatingTimer.pause).toHaveBeenCalledTimes(4);
  });

  it("resumes the retreating timer if it is running and the window is initially invisible", () => {
    mockVariables.windowIsVisible = false;
    document.dispatchEvent(visibilityChange);
    expect(mockRetreatingTimer.resume).toHaveBeenCalledTimes(4);
  });

  it("does not pause the retreating timer if it is not running and the window is initially visible", () => {
    mockRetreatingTimer.isRunning = false;
    document.dispatchEvent(visibilityChange);
    expect(mockRetreatingTimer.pause).toHaveBeenCalledTimes(0);
  });

  it("does not resume the retreating timer if it is not running and the window is initially invisible", () => {
    mockVariables.windowIsVisible = false;
    mockRetreatingTimer.isRunning = false;
    document.dispatchEvent(visibilityChange);
    expect(mockRetreatingTimer.resume).toHaveBeenCalledTimes(0);
  });
});