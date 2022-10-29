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
let mockPlayGame;
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
    mockPlayGame = jest.fn();
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
      mockPauseTimers,
      mockResumeTimers,
      mockPlayGame
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
      mockPauseTimers,
      mockResumeTimers,
      mockPlayGame
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
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
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
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      mockVariables.isGamePaused = true;
      window.dispatchEvent(escKeyEvent);
      expect(mockVariables.isGamePaused).toBeFalsy();
    });

    it("call playGame if isGamePaused is initially true", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      mockVariables.isGamePaused = true;
      window.dispatchEvent(escKeyEvent);
      expect(mockPlayGame).toHaveBeenCalledTimes(1);
      expect(mockPlayGame).toHaveBeenCalledWith(
        mockVariables.playerName,
        mockVariables.reactRoot
      );
    });

    it("call pause on the ghosts siren audio object if isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      jest.spyOn(mockSirenAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockSirenAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("call pause on the ghosts scared audio object if isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      jest.spyOn(mockScaredAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockScaredAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("call pause on the ghosts retreating audio object if isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      jest.spyOn(mockRetreatingAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockRetreatingAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("call pause on the pacman death audio if it is loaded and isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      jest.spyOn(mockPacmanDeathAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockPacmanDeathAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("not call pause on the pacman death audio if it is unloaded and isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockUnloadedPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      jest.spyOn(mockUnloadedPacmanDeathAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockUnloadedPacmanDeathAudio.pause).toHaveBeenCalledTimes(0);
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
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
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
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      mockVariables.isGamePaused = true;
      jest.spyOn(mockUnloadedPacmanDeathAudio, "play");
      window.dispatchEvent(escKeyEvent);
      expect(mockUnloadedPacmanDeathAudio.play).toHaveBeenCalledTimes(0);
    });

    it("call pause on the level up audio if it is loaded and isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      jest.spyOn(mockLevelUpAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockLevelUpAudio.pause).toHaveBeenCalledTimes(1);
    });

    it("not call pause on the level up audio if it is unloaded and isGamePaused is initially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockUnloadedLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      jest.spyOn(mockUnloadedLevelUpAudio, "pause");
      window.dispatchEvent(escKeyEvent);
      expect(mockUnloadedLevelUpAudio.pause).toHaveBeenCalledTimes(0);
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
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
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
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      mockVariables.isGamePaused = true;
      jest.spyOn(mockUnloadedLevelUpAudio, "play");
      window.dispatchEvent(escKeyEvent);
      expect(mockUnloadedLevelUpAudio.play).toHaveBeenCalledTimes(0);
    });

    it("to call pauseTimers if isGamePaused is intially false", () => {
      addPauseDetection(
        mockVariables,
        mockCycleTimer,
        mockScaredTimer,
        mockRetreatingTimers,
        mockGhostAudioObjects,
        mockPacmanDeathAudio,
        mockLevelUpAudio,
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
      );
      window.dispatchEvent(escKeyEvent);
      expect(mockPauseTimers).toHaveBeenCalledTimes(1);
      expect(mockPauseTimers).toHaveBeenCalledWith(
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
        mockPauseTimers,
        mockResumeTimers,
        mockPlayGame
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
  });
});
