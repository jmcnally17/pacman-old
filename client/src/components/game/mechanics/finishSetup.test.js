import finishSetup from "./finishSetup";

let mockVariables;
let mockName;
let mockReactRoot;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockAddDirectionDetection;
let mockAddVisibilityDetection;

describe("finishSetup", () => {
  beforeEach(() => {
    mockVariables = {
      playerName: "",
      reactRoot: "",
      start: true,
      directionEventListener: null,
      visibilityEventListener: null,
    };
    mockName = "John";
    mockReactRoot = "reactRoot";
    mockCycleTimer = {
      start: () => undefined,
    };
    jest.spyOn(mockCycleTimer, "start");
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockAddDirectionDetection = jest.fn();
    mockAddVisibilityDetection = jest.fn();
  });

  it("sets the playerName and reactRoot", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAddDirectionDetection,
      mockAddVisibilityDetection
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
      mockAddDirectionDetection,
      mockAddVisibilityDetection
    );
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
  });

  it("sets directionEventListener in the variables object to addDirectionDetection to add the event listener", () => {
    mockAddDirectionDetection.mockReturnValue("directionEventListener");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAddDirectionDetection,
      mockAddVisibilityDetection
    );
    expect(mockAddDirectionDetection).toHaveBeenCalledTimes(1);
    expect(mockAddDirectionDetection).toHaveBeenCalledWith(mockVariables);
    expect(mockVariables.directionEventListener).toEqual(
      mockAddDirectionDetection()
    );
  });

  it("sets visibilityEventListener in the variables object to addVisibilityDetection to add the event listener", () => {
    mockAddVisibilityDetection.mockReturnValue("visibilityEventListener");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAddDirectionDetection,
      mockAddVisibilityDetection
    );
    expect(mockAddVisibilityDetection).toHaveBeenCalledTimes(1);
    expect(mockAddVisibilityDetection).toHaveBeenCalledWith(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers
    );
    expect(mockVariables.visibilityEventListener).toEqual(
      mockAddVisibilityDetection()
    );
  });

  it("sets the start variable to false", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAddDirectionDetection,
      mockAddVisibilityDetection
    );
    expect(mockVariables.start).toBeFalsy();
  });
});
