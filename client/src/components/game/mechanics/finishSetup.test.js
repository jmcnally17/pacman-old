import finishSetup from "./finishSetup";

let mockVariables;
let mockName;
let mockReactRoot;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockGhostAudioObjects;
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
    mockGhostAudioObjects = [
      {
        play: () => undefined,
        load: () => undefined,
      },
    ];
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
      mockGhostAudioObjects,
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
      mockGhostAudioObjects,
      mockAddDirectionDetection,
      mockAddVisibilityDetection
    );
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
  });

  it("calls addDirectionDetection to add the event listener", () => {
    mockAddDirectionDetection.mockReturnValue("directionEventListener");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockAddDirectionDetection,
      mockAddVisibilityDetection
    );
    expect(mockAddDirectionDetection).toHaveBeenCalledTimes(1);
    expect(mockAddDirectionDetection).toHaveBeenCalledWith(mockVariables);
  });

  it("calls addVisibilityDetection to add the event listener", () => {
    mockAddVisibilityDetection.mockReturnValue("visibilityEventListener");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
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
  });

  it("sets the start variable to false", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockAddDirectionDetection,
      mockAddVisibilityDetection
    );
    expect(mockVariables.start).toBeFalsy();
  });

  it("plays the ghost siren which is the first audio object in the array", () => {
    jest.spyOn(mockGhostAudioObjects[0], "load");
    jest.spyOn(mockGhostAudioObjects[0], "play");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockAddDirectionDetection,
      mockAddVisibilityDetection
    );
    expect(mockGhostAudioObjects[0].load).toHaveBeenCalledTimes(1);
    expect(mockGhostAudioObjects[0].play).toHaveBeenCalledTimes(1);
  });
});
