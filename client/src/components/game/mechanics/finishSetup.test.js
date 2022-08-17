import finishSetup from "./finishSetup";

let mockVariables;
let mockName;
let mockReactRoot;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockAddVisibilityDetection;
let mockAddDirectionDetection;

describe("finishSetup", () => {
  beforeEach(() => {
    mockVariables = {
      playerName: "",
      reactRoot: "",
      start: true,
    };
    mockName = "John";
    mockReactRoot = "reactRoot";
    mockCycleTimer = {
      start: () => undefined,
    };
    jest.spyOn(mockCycleTimer, "start");
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockAddVisibilityDetection = jest.fn();
    mockAddDirectionDetection = jest.fn();
  });

  it("sets the playerName and reactRoot", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAddVisibilityDetection,
      mockAddDirectionDetection
    );
    expect(mockVariables.playerName).toBe(mockName);
    expect(mockVariables.reactRoot).toBe(mockReactRoot);
  });

  it("starts the cycle timer", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAddVisibilityDetection,
      mockAddDirectionDetection
    );
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
  });

  it("calls addVisibilityDetection to add the event listener", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAddVisibilityDetection,
      mockAddDirectionDetection
    );
    expect(mockAddVisibilityDetection).toHaveBeenCalledTimes(1);
    expect(mockAddVisibilityDetection).toHaveBeenCalledWith(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers
    );
  });

  it("calls addDirectionDetection to add the event listener", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAddVisibilityDetection,
      mockAddDirectionDetection
    );
    expect(mockAddDirectionDetection).toHaveBeenCalledTimes(1);
    expect(mockAddDirectionDetection).toHaveBeenCalledWith(mockVariables);
  });

  it("sets the start variable to false", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAddVisibilityDetection,
      mockAddDirectionDetection
    );
    expect(mockVariables.start).toBeFalsy();
  });
});
