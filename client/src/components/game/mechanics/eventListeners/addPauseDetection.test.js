import addPauseDetection from "./addPauseDetection";

let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockGhostAudioObjects;
let mockPacmanDeathAudio;
let mockLevelUpAudio;
let mockPacman;
let mockCtx;
let mockBoundaries;
let mockPellets;
let mockPowerUps;
let mockGhosts;
let mockPauseAudioAndTimers;
let mockResumeAudioAndTimers;
let mockResumeAnimation;
let escKeyEvent;

describe("addPauseDetection", () => {
  beforeEach(() => {
    mockVariables = {
      animationId: 3950,
      isGamePaused: false,
      pauseEventListener: null,
      playerName: "John",
      reactRoot: undefined,
    };
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockGhostAudioObjects = "ghostAudioObjects";
    mockPacmanDeathAudio = "pacmanDeathAudio";
    mockLevelUpAudio = "levelUpAudio";
    mockPacman = "pacman";
    mockCtx = "ctx";
    mockBoundaries = "boundaries";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockGhosts = "ghosts";
    mockPauseAudioAndTimers = jest.fn();
    mockResumeAudioAndTimers = jest.fn();
    mockResumeAnimation = jest.fn();
    escKeyEvent = new KeyboardEvent("keydown", { key: "Escape" });
  });

  it("adds an event listener to call cancelAnimationFrame when isGamePaused is initially false", () => {
    addPauseDetection(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseAudioAndTimers,
      mockResumeAudioAndTimers,
      mockResumeAnimation
    );
    jest.spyOn(global, "cancelAnimationFrame");
    window.dispatchEvent(escKeyEvent);
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("sets pauseEventListener in the variables object to the arrow function that defines the event listener", () => {
    addPauseDetection(
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockRetreatingTimers,
      mockGhostAudioObjects,
      mockPacmanDeathAudio,
      mockLevelUpAudio,
      mockPacman,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPauseAudioAndTimers,
      mockResumeAudioAndTimers,
      mockResumeAnimation
    );
    expect(mockVariables.pauseEventListener).toEqual(expect.any(Function));
  });

  describe("adds an event listener to", () => {
    it("change isGamePaused to true if it is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPacman,
        mockCtx,
        mockBoundaries,
        mockPellets,
        mockPowerUps,
        mockGhosts,
        mockPauseAudioAndTimers,
        mockResumeAudioAndTimers,
        mockResumeAnimation
      );
      window.dispatchEvent(escKeyEvent);
      expect(mockVariables.isGamePaused).toBeTruthy();
    });

    it("change isGamePaused to false if it is initially true", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPacman,
        mockCtx,
        mockBoundaries,
        mockPellets,
        mockPowerUps,
        mockGhosts,
        mockPauseAudioAndTimers,
        mockResumeAudioAndTimers,
        mockResumeAnimation
      );
      mockVariables.isGamePaused = true;
      window.dispatchEvent(escKeyEvent);
      expect(mockVariables.isGamePaused).toBeFalsy();
    });

    it("call PauseAudioAndTimers if isGamePaused is intially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPacman,
        mockCtx,
        mockBoundaries,
        mockPellets,
        mockPowerUps,
        mockGhosts,
        mockPauseAudioAndTimers,
        mockResumeAudioAndTimers,
        mockResumeAnimation
      );
      window.dispatchEvent(escKeyEvent);
      expect(mockPauseAudioAndTimers).toHaveBeenCalledTimes(1);
      expect(mockPauseAudioAndTimers).toHaveBeenCalledWith(
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });

    it("call ResumeAudioAndTimers if isGamePaused is intially true", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPacman,
        mockCtx,
        mockBoundaries,
        mockPellets,
        mockPowerUps,
        mockGhosts,
        mockPauseAudioAndTimers,
        mockResumeAudioAndTimers,
        mockResumeAnimation
      );
      mockVariables.isGamePaused = true;
      window.dispatchEvent(escKeyEvent);
      expect(mockResumeAudioAndTimers).toHaveBeenCalledTimes(1);
      expect(mockResumeAudioAndTimers).toHaveBeenCalledWith(
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers
      );
    });

    it("call resumeAnimation if isGamePaused is initially true", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPacman,
        mockCtx,
        mockBoundaries,
        mockPellets,
        mockPowerUps,
        mockGhosts,
        mockPauseAudioAndTimers,
        mockResumeAudioAndTimers,
        mockResumeAnimation
      );
      mockVariables.isGamePaused = true;
      window.dispatchEvent(escKeyEvent);
      expect(mockResumeAnimation).toHaveBeenCalledTimes(1);
      expect(mockResumeAnimation).toHaveBeenCalledWith(
        mockVariables,
        mockCtx,
        mockBoundaries,
        mockPellets,
        mockPowerUps,
        mockPacman,
        mockGhosts,
        mockCycleTimer,
        mockScaredTimer,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio
      );
    });
  });
});
