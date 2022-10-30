import addPauseDetection from "./addPauseDetection";

let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockGhostAudioObjects;
let mockPacmanDeathAudio;
let mockUnloadedPacmanDeathAudio;
let mockLevelUpAudio;
let mockUnloadedLevelUpAudio;
let mockPacman;
let mockCtx;
let mockBoundaries;
let mockPellets;
let mockPowerUps;
let mockGhosts;
let mockPauseAudioAndTimers;
let mockResumeTimers;
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
    mockPacmanDeathAudio = {
      _state: "loaded",
      play: () => undefined,
    };
    mockUnloadedPacmanDeathAudio = {
      _state: "unloaded",
      play: () => undefined,
    };
    mockLevelUpAudio = {
      _state: "loaded",
      play: () => undefined,
    };
    mockUnloadedLevelUpAudio = {
      _state: "unloaded",
      play: () => undefined,
    };
    mockPacman = "pacman";
    mockCtx = "ctx";
    mockBoundaries = "boundaries";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockGhosts = "ghosts";
    mockPauseAudioAndTimers = jest.fn();
    mockResumeTimers = jest.fn();
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
      mockResumeTimers,
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
      mockResumeTimers,
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
        mockResumeTimers,
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
        mockResumeTimers,
        mockResumeAnimation
      );
      mockVariables.isGamePaused = true;
      window.dispatchEvent(escKeyEvent);
      expect(mockVariables.isGamePaused).toBeFalsy();
    });

    it("call play on the pacman death audio if it is loaded and isGamePaused is initially true", () => {
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
        mockResumeTimers,
        mockResumeAnimation
      );
      mockVariables.isGamePaused = true;
      jest.spyOn(mockPacmanDeathAudio, "play");
      window.dispatchEvent(escKeyEvent);
      expect(mockPacmanDeathAudio.play).toHaveBeenCalledTimes(1);
    });

    it("not call play on the pacman death audio if it is unloaded and isGamePaused is initially true", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockUnloadedPacmanDeathAudio,
        mockLevelUpAudio,
        mockPacman,
        mockCtx,
        mockBoundaries,
        mockPellets,
        mockPowerUps,
        mockGhosts,
        mockPauseAudioAndTimers,
        mockResumeTimers,
        mockResumeAnimation
      );
      mockVariables.isGamePaused = true;
      jest.spyOn(mockUnloadedPacmanDeathAudio, "play");
      window.dispatchEvent(escKeyEvent);
      expect(mockUnloadedPacmanDeathAudio.play).toHaveBeenCalledTimes(0);
    });

    it("call play on the level up audio if it is loaded and isGamePaused is initially true", () => {
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
        mockResumeTimers,
        mockResumeAnimation
      );
      mockVariables.isGamePaused = true;
      jest.spyOn(mockLevelUpAudio, "play");
      window.dispatchEvent(escKeyEvent);
      expect(mockLevelUpAudio.play).toHaveBeenCalledTimes(1);
    });

    it("not call play on the level up audio if it is unloaded and isGamePaused is initially true", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockUnloadedLevelUpAudio,
        mockPacman,
        mockCtx,
        mockBoundaries,
        mockPellets,
        mockPowerUps,
        mockGhosts,
        mockPauseAudioAndTimers,
        mockResumeTimers,
        mockResumeAnimation
      );
      mockVariables.isGamePaused = true;
      jest.spyOn(mockUnloadedLevelUpAudio, "play");
      window.dispatchEvent(escKeyEvent);
      expect(mockUnloadedLevelUpAudio.play).toHaveBeenCalledTimes(0);
    });

    it("to call PauseAudioAndTimers if isGamePaused is intially false", () => {
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
        mockResumeTimers,
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

    it("to call resumeTimers if isGamePaused is intially true", () => {
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
        mockResumeTimers,
        mockResumeAnimation
      );
      mockVariables.isGamePaused = true;
      window.dispatchEvent(escKeyEvent);
      expect(mockResumeTimers).toHaveBeenCalledTimes(1);
      expect(mockResumeTimers).toHaveBeenCalledWith(
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
        mockResumeTimers,
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
