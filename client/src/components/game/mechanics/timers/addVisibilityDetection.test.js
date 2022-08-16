import addVisibilityDetection from "./addVisibilityDetection";

let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockPauseTimers;
let mockResumeTimers;
let visibilityChange;

describe("addVisibilityDetection", () => {
  beforeEach(() => {
    mockVariables = {
      windowIsVisible: true,
    };
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockPauseTimers = jest.fn();
    mockResumeTimers = jest.fn();
    visibilityChange = new Event("visibilitychange");
    addVisibilityDetection(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockPauseTimers,
      mockResumeTimers
    );
  });

  describe("adds an event listener", () => {
    it("to change windowIsVisible to true if it is intially false", () => {
      document.dispatchEvent(visibilityChange);
      expect(mockVariables.windowIsVisible).toBeFalsy();
    });

    it("to change windowIsVisible to false if it is initially true", () => {
      mockVariables.windowIsVisible = true;
      document.dispatchEvent(visibilityChange);
      expect(mockVariables.windowIsVisible).toBeFalsy();
    });

    it("to call pauseTimers if windowIsVisible is intially true", () => {
      document.dispatchEvent(visibilityChange);
      expect(mockPauseTimers).toHaveBeenCalledTimes(1);
      expect(mockPauseTimers).toHaveBeenCalledWith(
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
      expect(mockResumeTimers).toHaveBeenCalledTimes(0);
    });

    it("to call resumeTimers if windowIsVisible is intially false", () => {
      mockVariables.windowIsVisible = false;
      document.dispatchEvent(visibilityChange);
      expect(mockPauseTimers).toHaveBeenCalledTimes(0);
      expect(mockResumeTimers).toHaveBeenCalledTimes(1);
      expect(mockResumeTimers).toHaveBeenCalledWith(
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });
  });
});
