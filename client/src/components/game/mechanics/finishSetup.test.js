import finishSetup from "./finishSetup";

let mockVariables;
let mockName;
let mockReactRoot;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockAudioPlayer;
let mockPacman;
let mockCtx;
let mockBoundaries;
let mockPellets;
let mockPowerUps;
let mockGhosts;
let mockPauseTextImage;
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
    mockAudioPlayer = {
      playGhostSiren: () => undefined,
    };
    mockPacman = "pacman";
    mockCtx = "ctx";
    mockBoundaries = "boundaries";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockGhosts = "ghosts";
    mockPauseTextImage = "pauseTextImage";
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
      mockAudioPlayer,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseTextImage,
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
      mockAudioPlayer,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseTextImage,
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
      mockAudioPlayer,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseTextImage,
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
      mockAudioPlayer,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseTextImage,
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
      mockAudioPlayer
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
      mockAudioPlayer,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseTextImage,
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
      mockAudioPlayer,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseTextImage
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
      mockAudioPlayer,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseTextImage,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockVariables.start).toBeFalsy();
  });

  it("calls playGhostSiren on the audioPlayer", () => {
    jest.spyOn(mockAudioPlayer, "playGhostSiren");
    finishSetup(
      mockVariables,
      mockName,
      mockReactRoot,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockAudioPlayer,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseTextImage,
      mockAddDirectionDetection,
      mockAddVisibilityDetection,
      mockAddPauseDetection
    );
    expect(mockAudioPlayer.playGhostSiren).toHaveBeenCalledTimes(1);
  });
});
