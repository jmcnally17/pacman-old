import pauseAndResumeCycle from "./pauseAndResumeCycle";

let mockCycleTimer;
let mockGameWindow;

describe("pauseAndResumeCycle", () => {
  beforeEach(() => {
    mockCycleTimer = {
      pause: () => undefined,
      resume: () => undefined,
    };
    mockGameWindow = {
      addEventListener: () => undefined,
    };
    jest.spyOn(mockGameWindow, "addEventListener");
  });

  it("adds the event listener to pause and resume the cycle when window is out of and in focus respectively", () => {
    pauseAndResumeCycle(mockCycleTimer, mockGameWindow);
    expect(mockGameWindow.addEventListener).toHaveBeenCalledTimes(2);
    expect(mockGameWindow.addEventListener).toHaveBeenNthCalledWith(
      1,
      "blur",
      mockCycleTimer.pause
    );
    expect(mockGameWindow.addEventListener).toHaveBeenNthCalledWith(
      2,
      "focus",
      mockCycleTimer.resume
    );
  });
});
