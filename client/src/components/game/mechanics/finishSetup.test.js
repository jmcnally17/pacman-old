import finishSetup from "./finishSetup";

let mockVariables;
let mockName;
let mockReactRoot;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
let mockPacmanDeathAudio;
let mockLevelUpAudio;
let mockAddDirectionDetection;
let mockAddVisibilityDetection;
let mockAddPauseDetection;

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
    mockSirenAudio = {
      play: () => undefined,
      load: () => undefined,
    };
    mockScaredAudio = {
      load: () => undefined,
    };
    mockRetreatingAudio = {
      load: () => undefined,
    };
    mockGhostAudioObjects = [
      mockSirenAudio,
      mockScaredAudio,
      mockRetreatingAudio,
    ];
    mockPacmanDeathAudio = {
      unload: () => undefined,
    };
    mockLevelUpAudio = {
      unload: () => undefined,
    };
    mockAddDirectionDetection = jest.fn();
    mockAddVisibilityDetection = jest.fn();
    mockAddPauseDetection = jest.fn();
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
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
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
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockCycleTimer.start).toHaveBeenCalledTimes(1);
  });

  it("calls addDirectionDetection to add the event listener", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockAddDirectionDetection).toHaveBeenCalledTimes(1);
    expect(mockAddDirectionDetection).toHaveBeenCalledWith(mockVariables);
  });

  it("calls addVisibilityDetection to add the event listener", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockAddVisibilityDetection).toHaveBeenCalledTimes(1);
    expect(mockAddVisibilityDetection).toHaveBeenCalledWith(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio
    );
  });

  it("calls addPauseDetection to add the event listener", () => {
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockAddPauseDetection).toHaveBeenCalledTimes(1);
    expect(mockAddPauseDetection).toHaveBeenCalledWith(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio
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
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockVariables.start).toBeFalsy();
  });

  it("loads and plays the ghost siren", () => {
    jest.spyOn(mockSirenAudio, "load");
    jest.spyOn(mockSirenAudio, "play");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockSirenAudio.load).toHaveBeenCalledTimes(1);
    expect(mockSirenAudio.play).toHaveBeenCalledTimes(1);
  });

  it("loads the ghosts scared audio", () => {
    jest.spyOn(mockScaredAudio, "load");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockScaredAudio.load).toHaveBeenCalledTimes(1);
  });

  it("loads the ghosts retreating audio", () => {
    jest.spyOn(mockRetreatingAudio, "load");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockRetreatingAudio.load).toHaveBeenCalledTimes(1);
  });

  it("unloads the Pac-Man death audio", () => {
    jest.spyOn(mockPacmanDeathAudio, "unload");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockPacmanDeathAudio.unload).toHaveBeenCalledTimes(1);
  });

  it("unloads the level up audio", () => {
    jest.spyOn(mockLevelUpAudio, "unload");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockLevelUpAudio.unload).toHaveBeenCalledTimes(1);
  });
});
