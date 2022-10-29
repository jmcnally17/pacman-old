import addPauseDetection from "./addPauseDetection";

let mockVariables;
let mockCycleTimer;
let mockScaredTimer;
let mockRetreatingTimers;
let mockSirenAudio;
let mockScaredAudio;
let mockRetreatingAudio;
let mockGhostAudioObjects;
let mockPacmanDeathAudio;
let mockUnloadedPacmanDeathAudio;
let mockLevelUpAudio;
let mockUnloadedLevelUpAudio;
let mockPauseTimers;
let mockResumeTimers;
let escKeyEvent;

describe("addPauseDetection", () => {
  beforeEach(() => {
    mockVariables = {
      animationId: 3950,
      isGamePaused: false,
      pauseEventListener: null,
    };
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockRetreatingTimers = "retreatingTimers";
    mockSirenAudio = {
      pause: () => undefined,
    };
    mockScaredAudio = {
      pause: () => undefined,
    };
    mockRetreatingAudio = {
      pause: () => undefined,
    };
    mockGhostAudioObjects = [
      mockSirenAudio,
      mockScaredAudio,
      mockRetreatingAudio,
    ];
    mockPacmanDeathAudio = {
      _state: "loaded",
      pause: () => undefined,
      play: () => undefined,
    };
    mockUnloadedPacmanDeathAudio = {
      _state: "unloaded",
      pause: () => undefined,
      play: () => undefined,
    };
    mockLevelUpAudio = {
      _state: "loaded",
      pause: () => undefined,
      play: () => undefined,
    };
    mockUnloadedLevelUpAudio = {
      _state: "unloaded",
      pause: () => undefined,
      play: () => undefined,
    };
    mockPauseTimers = jest.fn();
    mockResumeTimers = jest.fn();
    escKeyEvent = new KeyboardEvent("keydown", { key: "Escape" });
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
      mockPauseTimers,
      mockResumeTimers
    );
    expect(mockVariables.pauseEventListener).toEqual(expect.any(Function));
  });

  describe("adds an event listener", () => {
    it("to change isGamePaused to true if it is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      window.dispatchEvent(escKeyEvent);
      expect(mockVariables.isGamePaused).toBeTruthy();
    });

    it("to change isGamePaused to false if it is initially true", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.isGamePaused = true;
      window.dispatchEvent(escKeyEvent);
      expect(mockVariables.isGamePaused).toBeFalsy();
    });

    it("calls pause on the ghosts siren audio object if isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockSirenAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghosts scared audio object if isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockScaredAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the ghosts retreating audio object if isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockRetreatingAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockRetreatingAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("calls pause on the pacman death audio if it is loaded and isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockPacmanDeathAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockPacmanDeathAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("does not call pause on the pacman death audio if it is unloaded and isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockUnloadedPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockUnloadedPacmanDeathAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockUnloadedPacmanDeathAudio.pause).toHaveBeenCalledTimes(0);
    });

    it("calls play on the pacman death audio if it is loaded and isGamePaused is initially true", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.isGamePaused = true;
      jest.spyOn(mockPacmanDeathAudio, "play");
      window.dispatchEvent(escKeyEvent);
      expect(mockPacmanDeathAudio.play).toHaveBeenCalledTimes(1);
    });

    it("does not call play on the pacman death audio if it is unloaded and isGamePaused is initially true", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockUnloadedPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      mockVariables.isGamePaused = true;
      jest.spyOn(mockUnloadedPacmanDeathAudio, "play");
      window.dispatchEvent(escKeyEvent);
      expect(mockUnloadedPacmanDeathAudio.play).toHaveBeenCalledTimes(0);
    });

    it("calls pause on the level up audio if it is loaded and isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockLevelUpAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockLevelUpAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("does not call pause on the level up audio if it is unloaded and isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockUnloadedLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers
      );
      jest.spyOn(mockUnloadedLevelUpAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockUnloadedLevelUpAudio.pause).toHaveBeenCalledTimes(0);
    });
  });
});
