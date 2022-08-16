import pauseTimers from "./pauseTimers";

let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimer;
let mockRetreatingTimers;

describe("pauseTimers", () => {
  beforeEach(() => {
    mockCycleTimer = {
      pause: () => undefined,
    };
    mockScaredTimer = {
      isRunning: false,
      pause: () => undefined,
    };
    mockRetreatingTimer = {
      isRunning: true,
      pause: () => undefined,
    };
    mockRetreatingTimers = [
      mockRetreatingTimer,
      mockRetreatingTimer,
      mockRetreatingTimer,
      mockRetreatingTimer,
    ];
    jest.spyOn(mockCycleTimer, "pause");
    jest.spyOn(mockScaredTimer, "pause");
    jest.spyOn(mockRetreatingTimer, "pause");
  });

  it("calls pause on the cycle timer if the scared timer is not running", () => {
    pauseTimers(mockCycleTimer, mockScaredTimer, mockRetreatingTimers);
    expect(mockCycleTimer.pause).toHaveBeenCalledTimes(1);
    expect(mockScaredTimer.pause).toHaveBeenCalledTimes(0);
  });

  it("calls pause on the scared timer if it is running", () => {
    mockScaredTimer.isRunning = true;
    pauseTimers(mockCycleTimer, mockScaredTimer, mockRetreatingTimers);
    expect(mockCycleTimer.pause).toHaveBeenCalledTimes(0);
    expect(mockScaredTimer.pause).toHaveBeenCalledTimes(1);
  });

  it("calls pause on the retreating timers if it is running", () => {
    pauseTimers(mockCycleTimer, mockScaredTimer, mockRetreatingTimers);
    expect(mockRetreatingTimer.pause).toHaveBeenCalledTimes(4);
  });

  it("does not call pause on the retreating timers if they are not running", () => {
    mockRetreatingTimer.isRunning = false;
    pauseTimers(mockCycleTimer, mockScaredTimer, mockRetreatingTimers);
    expect(mockRetreatingTimer.pause).toHaveBeenCalledTimes(0);
  });
});
